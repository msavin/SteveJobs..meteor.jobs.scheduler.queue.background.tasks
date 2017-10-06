// To Do 1: Ensure this only runs on one server
// To Do 2: Provide a way to set the timeout
// Future: When it runs the last job, the package could check if there is something scheduled to run before its time out, and shorten the timeout
// Future: Provide ability to run jobs across multiple servers. Perhaps it could be divided by considering if the MongoDB document id starts with a number or letter.

JobsRunner = {
	available: true,
	state: null,
	start: function () {
		timeout = Jobs.timer || 30000;

		this.state = Meteor.setTimeout(function () {
			JobsRunner.run()
		}, );
	},
	stop: function () {
		return Meteor.clearTimeout(this.state);
	},
	run: function () {
		// Step 1: Find document
		// Step 2: Run the job
		// Step 3: Check if there are more jobs to run
	}
}

Meteor.startup(function () {
	// if (Control.serverIsActive) {
		JobsRunner.start();
	// }
});
