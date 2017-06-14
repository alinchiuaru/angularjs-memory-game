export default class FirstmoduleService {
	constructor($q,$timeout){
		this.$q = $q;
		this.$timeout = $timeout;
		this.data = {};
	}
	doAsync(){
		let deferred = this.$q.defer();
		this.$timeout(() => {
			// this is not a perfect solution
			// i would like to see here a call for external
			// service which handles async calls like $http/$resource
			// i want to keep my example as simple as possible
			this.data = {name: "first"};
			deferred.resolve();
		}, 2000);
		return deferred.promise
	}
}