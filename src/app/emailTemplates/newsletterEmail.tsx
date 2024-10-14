import * as React from 'react'

interface EmailTemplateProps {
  email: string
}

export const NewsletterEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email }) => (
  <div>
    <h1>New Message from wittnerwollman.com:</h1>
    <h2>Congratulations, there is a new member of the wittner wollman newsletter!</h2>
    <h3>Member Email: {email}</h3>
  </div>
)
