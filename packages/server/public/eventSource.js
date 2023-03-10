var sse = new EventSource('/api/sse.php');
var eventList = document.querySelector('ul');

/* This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: someid
 *
 */
sse.addEventListener("notice", function(e) {
  console.log(e.data)
})

/* Similarly, this will listen for events
 * with the field `event: update`
 */
sse.addEventListener("update", function(e) {
  console.log(e.data)
})

/* The event "message" is a special case, as it
 * will capture events without an event field
 * as well as events that have the specific type
 * `event: message` It will not trigger on any
 * other event type.
 */
sse.addEventListener("message", function(e) {
  console.log(e)
})
