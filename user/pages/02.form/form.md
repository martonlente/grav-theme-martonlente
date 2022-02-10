---
title: A Page with an Example Form
form:
    name: contact-form
    fields:
        - autocomplete: on
          autofocus: on
          label: Name
          name: name
          placeholder: Enter your name
          type: text
          validate:
            required: true

        - label: Email
          name: email
          placeholder: Enter your email address
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
