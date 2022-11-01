const TestSuite = {
    validate: function (output, wishOutput){
        if(output === wishOutput){
            return 'pass'
        }
        return 'fail'
    }
}
module.exports = TestSuite