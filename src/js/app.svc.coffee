define [], () -> {
  MessageService: [
    '$timeout'
    ($timeout) ->
      svc =
        autoDismiss: 5000
        messages: []

      svc.add = (err, txt) ->
          msg =
            error: err,
            txt: txt,
            dismissed: false
          svc.messages.push(msg)

          if svc.autoDismiss
            $timeout () ->
              msg.dismissed = true
            , svc.autoDismiss

      svc.error = (txt) -> svc.add(true, txt)

      svc.success = (txt) -> svc.add(false, txt)

      svc.clear = () -> svc.messages.length = 0

      svc.last = () ->
        if svc.messages.length is 0 then return false

        msg = svc.messages[svc.messages.length - 1]
        if msg.dismissed then false else msg
  ]
}
