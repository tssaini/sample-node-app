const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const Github = require('../../services/Github')
const axios = require('axios');

describe('listProjects' , ()=>{
    // let listProjects
    // let github
    let axiosGet
    beforeEach(function () {
        axiosGet = sinon.stub(axios, 'get')
    });

    afterEach(function () {
        axiosGet.restore()
    });

    it('should return array', async () => {
        axiosGet.resolves({data: [], status: 200})
        const github = new Github('test')
        list = await github.listProjects()
        sinon.assert.calledOnce(axiosGet)
        assert.isEmpty(list)
    });

    // it('should throw err', (done) => {
    //     // axiosGet.throws
    //     axiosGet.throws(new Error("failed to fetch"))//{data: [], status: 500})
    //     const github = new Github('test')
    //     sinon.assert github.listProjects()
    // });

});