class Aproove {

  constructor(login,password) {
      this._login = login;
      this._password = password;
      this._url = 'https://demo2.aproove.com/api/rpc/';
  }

  //CONNECTION

  login() {
    axios({
      method:'post',
      url: this._url+'login',
      data: {
        login: this._login,
        password: this._password
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  me() {
    axios({
      method:'post',
      url: this._url+'me',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  logout() {
    axios({
      method:'post',
      url: this._url+'logout',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  sessionKeepAlive() {
    axios({
      method:'post',
      url: this._url+'SessionKeepAlive',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  //CONFIG

  configList(userId) {
     axios({
      method:'post',
      url: this._url+'config.list',
      data: {
        userId : userId
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  languageList() {
    axios({
      method:'post',
      url: this._url+'language.list',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  roleList() {
    axios({
      method:'post',
      url: this._url+'role.list',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  //PROJECT

  projectCreate(configId, name, miscParams) {
    axios({
      method:'post',
      url: this._url+'project.createAndUpdate',
      data: {
        configId : configId,
        name : name,
        miscParams : miscParams
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

    projectUpdate(projectId, files) {
    axios({
      method:'post',
      url: this._url+'project.createAndUpdate',
      data: {
        projectId : projectId,
        files : files
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  projectCreateAccessToken(projectId, expireDate) {
    axios({
      method:'post',
      url: this._url+'project.createAccessToken',
      data: {
        projectId : projectId,
        expireDate : expireDate
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  projectDisableAccessToken(tokenId) {
    axios({
      method:'post',
      url: this._url+'project.disableAccessToken',
      data: {
        token : tokenId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  projectCreateDownloadToken(file) {
    axios({
      method:'post',
      url: this._url+'project.createDownloadToken',
      data: {
        file : file,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  projectDelete(projectId) {
    axios({
      method:'post',
      url: this._url+'project.delete',
      data: {
        projectId : projectId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  projectPageList(projectId) {
    axios({
      method:'post',
      url: this._url+'project.pageList',
      data: {
        projectId : projectId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  projectUserList(projectId) {
    axios({
      method:'post',
      url: this._url+'project.pageList',
      data: {
        projectId : projectId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverProjectExportPDF(projectId, userId, proofStart, proofEnd) {
    axios({
      method:'post',
      url: this._url+'serverProject.exportPDF',
      data: {
        projectId : projectId,
        userId : userId,
        proofStart : proofStart,
        proofEnd : proofEnd
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  //TEAM
  serverTeamList() {
    axios({
      method:'post',
      url: this._url+'serverTeam.list',
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  serverTeamRetrieveByName(teamName) {
    axios({
      method:'post',
      url: this._url+'project.pageList',
      data: {
        teamName : teamName,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverTeamRetrieveByUserId(userId) {
    axios({
      method:'post',
      url: this._url+'serverTeam.retrieveByUserId',
      data: {
        userId : userId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverTeamUserList(teamId) {
    axios({
      method:'post',
      url: this._url+'serverTeam.userList',
      data: {
        teamId : teamId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  //SERVER

  listServer() {
    axios({
      method:'post',
      url: this._url+'serverAgent.list',
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverConfigByTeamId(teamId) {
    axios({
      method:'post',
      url: this._url+'serverConfig.retrieveByTeamId',
      data: {
        teamId : teamId,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverConfigByName(configName) {
    axios({
      method:'post',
      url: this._url+'serverConfig.retrieveByName',
      data: {
        configName : configName,
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

  serverTimeTrackingRetrieveByDate(teamId,from,to) {
    axios({
      method:'post',
      url: this._url+'serverTimeTracking.retrieveByDate',
      data: {
        teamId : teamId,
        from : from,
        to : to
      },
      withCredentials: true
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
    });
  }

}
