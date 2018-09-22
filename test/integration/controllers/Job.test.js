var util = require('util');

describe('Job (model)', function() {

  describe('#findActiveJobs()', function() {
    it('should return all active jobs', function (done) {
      Job.find({status: 1})
        .then(function(jobsFound) {

          if (jobsFound.length === 0) {
            return done(new Error(
              'Should return all jobs -- '+
              'from our test fixtures who are considered the "best".  '+
              'But instead, got: '+util.inspect(jobsFound, {depth:null})+''
            ));
          }//-•

          return done();

        })
        .catch(done);
    });
  });

});


