# EmailJS Setup Instructions

## Steps to Enable Email Functionality

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Connect your email service provider (Gmail, Outlook, etc.)
   - Note down your **Service ID**

3. **Create Email Template**
   - Go to "Email Templates"
   - Create a new template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message content
     - `{{to_email}}` - Recipient email (your email)
   - Note down your **Template ID**

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

5. **Update Contact Component**
   - Open `src/components/Contact.jsx`
   - Replace the placeholder values with your actual keys:
     - `YOUR_SERVICE_ID` → Your EmailJS Service ID
     - `YOUR_TEMPLATE_ID` → Your EmailJS Template ID
     - `YOUR_PUBLIC_KEY` → Your EmailJS Public Key

## Example Configuration

```javascript
const serviceId = 'service_abc123'; // Replace with your actual service ID
const templateId = 'template_xyz789'; // Replace with your actual template ID
const publicKey = 'user_1234567890'; // Replace with your actual public key
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. Verify that error/success messages display correctly

## Troubleshooting

- Ensure all EmailJS IDs are correctly copied
- Check browser console for any error messages
- Verify your email service is properly connected in EmailJS
- Make sure your template variables match the code exactly

## Security Note

Never commit your actual EmailJS keys to version control. For production, consider using environment variables.