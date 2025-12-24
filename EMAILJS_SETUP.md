# EmailJS Setup Guide

Contact form messages ko apni email (henilpaneliya1001@gmail.com) par receive karne ke liye:

## Step 1: EmailJS Account Create Karo
1. Visit: https://www.emailjs.com/
2. Sign up with your email: henilpaneliya1001@gmail.com
3. Email verify karo

## Step 2: Email Service Add Karo
1. Dashboard mein jao
2. "Add New Service" click karo
3. Gmail select karo
4. "Connect Account" par click karke apna Gmail connect karo
5. Service ID copy karo

## Step 3: Email Template Create Karo
1. Dashboard mein "Email Templates" par jao
2. "Create New Template" click karo
3. Template design karo:

**Subject:**
```
New Message from {{from_name}} - {{subject}}
```

**Content:**
```
You have received a new message from your portfolio:

From: {{from_name}}
Contact: {{contact_info}}
Subject: {{subject}}

Message:
{{message}}
```

4. Template ID copy karo

## Step 4: Public Key Le Lo
1. Account settings mein jao
2. Public Key copy karo

## Step 5: .env File Update Karo
1. .env file kholo
2. Copy kiye gaye IDs paste karo:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

## Step 6: Development Server Restart Karo
```
npm run dev
```

Ab jab koi contact form fill karega, message aapki email (henilpaneliya1001@gmail.com) par aayega!

## Troubleshooting
- Agar email nahi aa raha, EmailJS dashboard mein logs check karo
- Gmail ka "Less secure app access" enable karna pad sakta hai
- Free plan mein 200 emails/month limit hai
