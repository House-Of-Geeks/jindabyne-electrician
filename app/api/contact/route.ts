import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, phone, location, service, message } = await req.json()

  if (!name || !email || !phone || !location || !service) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const fromEmail = process.env.SENDGRID_FROM_EMAIL
  const toEmails = (process.env.SENDGRID_TO_EMAIL ?? '').split(',').map(e => e.trim()).filter(Boolean)

  if (!apiKey || !fromEmail || toEmails.length === 0) {
    console.error('[contact] SendGrid env vars missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const subject = `New Enquiry: ${service} — ${location}`
  const html = `
    <h2>New Quote Request</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr style="background:#f8fafc"><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td><strong>Phone</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
      <tr style="background:#f8fafc"><td><strong>Location</strong></td><td>${location}</td></tr>
      <tr><td><strong>Service</strong></td><td>${service}</td></tr>
      ${message ? `<tr style="background:#f8fafc"><td><strong>Details</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
    </table>
  `

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: toEmails.map(e => ({ email: e })) }],
      from: { email: fromEmail, name: 'Jindabyne Electrician Website' },
      reply_to: { email, name },
      subject,
      content: [{ type: 'text/html', value: html }],
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('[contact] SendGrid error:', res.status, body)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
