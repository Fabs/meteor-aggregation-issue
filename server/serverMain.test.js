import { chai } from 'meteor/practicalmeteor:chai';

describe('Aggregation', function () {
  it('works but is not ideal, test should pass', function (done) {

    Meteor.call('worksButNotIdealMethod', function( err , res){
      if (res){
        console.log('res');
        var resultDoc = worksButNotIdealCollection.findOne({"event":"c"})
        var result = resultDoc.aggregated
        /// result should equal 6
        chai.assert.equal( result , 6);
      }

      done()
    });

  });

  it('ideal aggregation using $out, test should fail', function (done) {

    Meteor.call('idealButBrokenMethod', function( err , res){
      if (res){
        console.log('res');
      }

      var resultDoc = idealButBrokenCollection.findOne({ "_id" : "c"})
      var result = resultDoc.aggregated

      //result should equal 6
      chai.assert.equal( result , 6);
      done()

    });
  })
})
