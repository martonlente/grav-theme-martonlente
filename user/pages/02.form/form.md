---
title: A Page with an Example Form
form:
    name: contact-form
    fields:
        - label: Name
          name: name
          placeholder: Katalin Minta*
          type: text
          validate:
            required: true

        - label: Email
          name: email
          placeholder: Email*
          type: email
          validate:
            required: true

    buttons:
        - type: submit
          value: Submit

    process:
        - display: thankyou
        - message: Thank you for your feedback!
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"

---

# My Form

Regular **markdown** content goes here...
