describe('mainFactory', function () {
    var name = 'DicomViewer';
    var mainFactory = {};
    var $httpBackend;

    beforeEach(module('github_search'));
    beforeEach(inject(function (_mainFactory_, _$httpBackend_) {
        mainFactory = _mainFactory_;
        $httpBackend = _$httpBackend_;
    }));

    it('name property of an object should match', function () {
        var response;

        $httpBackend.when('GET', 'https://api.github.com/users/aleksandar/repos')
            .respond(200, name);

        mainFactory.getReposAsync('aleksandar').then(function (repos) {
            response = repos;
        });

        $httpBackend.flush();

        expect(response).toEqual(name);

    });

    it('handle an error', function () {
        var response;

        $httpBackend.when('GET', 'https://api.github.com/users/aleksandar/repos')
            .respond(500);

        mainFactory.getReposAsync('aleksandar').then(function (repos) {
            response = repos;
        }).catch(function () {
            response = 'Error!';
        });

        $httpBackend.flush();

        expect(response).toEqual('Error!');

    });


});