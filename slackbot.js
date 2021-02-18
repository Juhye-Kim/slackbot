const Slack = require('slack-node');
const schedule = require('node-schedule');
const webhookUri = "https://hooks.slack.com/services/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";

const slack = new Slack();
slack.setWebhook(webhookUri);

const send = async (message) => {
  slack.webhook({
    username: '시프티찍고가요',
    text: message,
  }, function (err, response) {
    console.log(response);
  });
}

schedule.scheduleJob('55 8 * * 1-5', function () {
  send('시프티 출근하세요❗️❗️❗️');
});
schedule.scheduleJob('0 9 * * 1-5', function () {
  send('시프티 출근하세요❗️❗️❗️');
});
schedule.scheduleJob('0 18 * * 1-5', function () {
  send('시프티 퇴근하세요❗️❗️❗️');
});
  // schedule.scheduleJob('10 18 * * 1-5', function(){
  //   send('시프티 퇴근하세요❗️❗️❗️');
  // });