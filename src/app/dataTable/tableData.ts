
export var data :any={  
  "totalCount":803,
  "count":13,
  "results":[  
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 09:12:06",
        "modified":"2018-Feb-08 09:12:06",
        "scheduleId":"04b9a6f6-972b-4d81-8155-ee099596c7da",
        "scheduleType":"WORKFLOW",
        "workflowId":"536deff1-1dfb-4f18-a4e6-cfb5bf72aab3",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Feb-08 09:12:06",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 09:12:06",
          "modified":"2018-Feb-08 09:12:32",
          "applicationId":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"Preocessing",
          "ownerId":"rabbadi",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "STRUCTURED",
              "--inputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input",
              "--destType",
              "STRUCTURED",
              "--outputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--inputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input"
            },
            {  
              "key":"--destType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--outputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"DropColumns\":[\"ocean_proximity\"],\n  \"MissingFields\": [],\n  \"FrequencySupport\":0.6,\n  \"MissingValuesWith\":\"Mean\",\n  \"ScaleType\":3,\n  \"PNorm\":2.0,\n  \"ScaleFunction\":[],\n  \"LabelCol\":\"median_house_value\",\n  \"LabelType\":\"Continious\",\n  \"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"536deff1-1dfb-4f18-a4e6-cfb5bf72aab3",
          "scheduleId":"04b9a6f6-972b-4d81-8155-ee099596c7da",
          "createDate":"2018-Feb-08 09:12:06",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 09:12:06",
        "modified":"2018-Feb-08 09:13:44",
        "workflowId":"536deff1-1dfb-4f18-a4e6-cfb5bf72aab3",
        "scheduleId":"04b9a6f6-972b-4d81-8155-ee099596c7da",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"rabbadi",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
        "parentScheduleId":"ae2b5036-cbef-4c9a-831b-4e273b5e444c",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"536deff1-1dfb-4f18-a4e6-cfb5bf72aab3",
          "name":"HOUSEML_PREPROCES_FEB8",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Feb-08 09:12:06",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 09:13:44",
          "modified":"2018-Feb-08 09:15:45",
          "wfRunSummaryId":"170be1a2f2b449d199ab62351f90ee90",
          "workflowId":"536deff1-1dfb-4f18-a4e6-cfb5bf72aab3",
          "scheduleId":"04b9a6f6-972b-4d81-8155-ee099596c7da",
          "oozieWFId":"0000408-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"HOUSEML_PREPROCES_FEB8",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/HOUSEML_PREPROCES_FEB8_536deff1-1dfb-4f18-a4e6-cfb5bf72aab3_04b9a6f6-972b-4d81-8155-ee099596c7da/",
          "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
          "parentScheduleId":"ae2b5036-cbef-4c9a-831b-4e273b5e444c",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000408-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 08 Feb 2018 09:13:32 GMT",
          "startTime":"Thu, 08 Feb 2018 09:13:32 GMT",
          "endTime":"Thu, 08 Feb 2018 09:15:17 GMT",
          "lastModTime":"Thu, 08 Feb 2018 09:15:17 GMT",
          "id":"0000408-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000408-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"37e5d36a26684c0cad46949cc53832f0",
              "jwfmWfRunId":"170be1a2f2b449d199ab62351f90ee90",
              "jwfmApplicationId":"f8019b52-72d0-44f3-b7a5-8e3faff88748",
              "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1412/",
              "endTime":"Thu, 08 Feb 2018 09:15:17 GMT",
              "oozieExternalId":"job_1513239715582_1412",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000408-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 08 Feb 2018 09:13:32 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[Prep_Processing] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:44:07",
        "modified":"2018-Feb-08 07:44:07",
        "scheduleId":"c4bc8710-c2aa-46fa-84f0-93d31afb5c74",
        "scheduleType":"WORKFLOW",
        "workflowId":"1e7d37dd-647f-4318-9870-117318c55758",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Feb-08 07:44:07",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:44:06",
          "modified":"2018-Feb-08 07:44:22",
          "applicationId":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"Preocessing",
          "ownerId":"rabbadi",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "STRUCTURED",
              "--inputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input",
              "--destType",
              "STRUCTURED",
              "--outputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--inputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input"
            },
            {  
              "key":"--destType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--outputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"DropColumns\":[\"ocean_proximity\"],\n  \"MissingFields\": [],\n  \"FrequencySupport\":0.6,\n  \"MissingValuesWith\":\"Mean\",\n  \"ScaleType\":3,\n  \"PNorm\":2.0,\n  \"ScaleFunction\":[],\n  \"LabelCol\":\"median_house_value\",\n  \"LabelType\":\"Continious\",\n  \"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"1e7d37dd-647f-4318-9870-117318c55758",
          "scheduleId":"c4bc8710-c2aa-46fa-84f0-93d31afb5c74",
          "createDate":"2018-Feb-08 07:44:06",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:44:07",
        "modified":"2018-Feb-08 07:44:38",
        "workflowId":"1e7d37dd-647f-4318-9870-117318c55758",
        "scheduleId":"c4bc8710-c2aa-46fa-84f0-93d31afb5c74",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"rabbadi",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
        "parentScheduleId":"80ad4ffc-c5af-4b97-a0ac-7dab2667f36e",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"1e7d37dd-647f-4318-9870-117318c55758",
          "name":"HOUSEML_PREPROCES_FEB8",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Feb-08 07:44:07",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:44:38",
          "modified":"2018-Feb-08 07:45:20",
          "wfRunSummaryId":"3e6c23faea19442d84b6d7675fd89313",
          "workflowId":"1e7d37dd-647f-4318-9870-117318c55758",
          "scheduleId":"c4bc8710-c2aa-46fa-84f0-93d31afb5c74",
          "oozieWFId":"0000407-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"HOUSEML_PREPROCES_FEB8",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/HOUSEML_PREPROCES_FEB8_1e7d37dd-647f-4318-9870-117318c55758_c4bc8710-c2aa-46fa-84f0-93d31afb5c74/",
          "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
          "parentScheduleId":"80ad4ffc-c5af-4b97-a0ac-7dab2667f36e",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000407-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 08 Feb 2018 07:44:34 GMT",
          "startTime":"Thu, 08 Feb 2018 07:44:34 GMT",
          "endTime":"Thu, 08 Feb 2018 07:45:04 GMT",
          "lastModTime":"Thu, 08 Feb 2018 07:45:04 GMT",
          "id":"0000407-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000407-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"bd60af52090142fcb2c4f644a4146e5a",
              "jwfmWfRunId":"3e6c23faea19442d84b6d7675fd89313",
              "jwfmApplicationId":"d285a51a-090e-4b16-94b4-5cd9c3e5ac56",
              "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1410/",
              "endTime":"Thu, 08 Feb 2018 07:45:04 GMT",
              "oozieExternalId":"job_1513239715582_1410",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000407-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 08 Feb 2018 07:44:34 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[Prep_Processing] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:42:56",
        "modified":"2018-Feb-08 07:42:56",
        "scheduleId":"b851fb1f-9423-4330-8010-b1a9136a1d94",
        "scheduleType":"WORKFLOW",
        "workflowId":"b7d23e98-220c-4083-ade0-d3a77f7f520c",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Feb-08 07:42:56",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:42:56",
          "modified":"2018-Feb-08 07:43:16",
          "applicationId":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"Preocessing",
          "ownerId":"rabbadi",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "STRUCTURED",
              "--inputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input",
              "--destType",
              "STRUCTURED",
              "--outputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--inputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input"
            },
            {  
              "key":"--destType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--outputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"DropColumns\":[\"ocean_proximity\"],\n  \"MissingFields\": [],\n  \"FrequencySupport\":0.6,\n  \"MissingValuesWith\":\"Mean\",\n  \"ScaleType\":3,\n  \"PNorm\":2.0,\n  \"ScaleFunction\":[],\n  \"LabelCol\":\"median_house_value\",\n  \"LabelType\":\"Continious\",\n  \"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"b7d23e98-220c-4083-ade0-d3a77f7f520c",
          "scheduleId":"b851fb1f-9423-4330-8010-b1a9136a1d94",
          "createDate":"2018-Feb-08 07:42:56",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:42:56",
        "modified":"2018-Feb-08 07:43:32",
        "workflowId":"b7d23e98-220c-4083-ade0-d3a77f7f520c",
        "scheduleId":"b851fb1f-9423-4330-8010-b1a9136a1d94",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"rabbadi",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
        "parentScheduleId":"42faaf4c-4d48-4946-abb9-9f25706d5003",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"b7d23e98-220c-4083-ade0-d3a77f7f520c",
          "name":"HOUSEML_PREPROCES_FEB8",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Feb-08 07:42:56",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:43:33",
          "modified":"2018-Feb-08 07:44:20",
          "wfRunSummaryId":"0232f73db0334a96abfaae6f27c0cd24",
          "workflowId":"b7d23e98-220c-4083-ade0-d3a77f7f520c",
          "scheduleId":"b851fb1f-9423-4330-8010-b1a9136a1d94",
          "oozieWFId":"0000406-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"HOUSEML_PREPROCES_FEB8",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/HOUSEML_PREPROCES_FEB8_b7d23e98-220c-4083-ade0-d3a77f7f520c_b851fb1f-9423-4330-8010-b1a9136a1d94/",
          "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
          "parentScheduleId":"42faaf4c-4d48-4946-abb9-9f25706d5003",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000406-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 08 Feb 2018 07:43:28 GMT",
          "startTime":"Thu, 08 Feb 2018 07:43:28 GMT",
          "endTime":"Thu, 08 Feb 2018 07:44:00 GMT",
          "lastModTime":"Thu, 08 Feb 2018 07:44:00 GMT",
          "id":"0000406-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000406-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"8f30cc0044264d6f88beb03003da25b9",
              "jwfmWfRunId":"0232f73db0334a96abfaae6f27c0cd24",
              "jwfmApplicationId":"b23b4116-b0af-494d-8d3c-92e13051b8f0",
              "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1408/",
              "endTime":"Thu, 08 Feb 2018 07:44:00 GMT",
              "oozieExternalId":"job_1513239715582_1408",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000406-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 08 Feb 2018 07:43:28 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[Prep_Processing] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:15:11",
        "modified":"2018-Feb-08 07:15:11",
        "scheduleId":"c38d4351-4088-4d35-9f47-272e94c8d261",
        "scheduleType":"WORKFLOW",
        "workflowId":"ad479958-5a7e-4630-8dbb-2d0e41ab388d",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Feb-08 07:15:11",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:15:10",
          "modified":"2018-Feb-08 07:15:26",
          "applicationId":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"Preocessing",
          "ownerId":"rabbadi",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "STRUCTURED",
              "--inputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input",
              "--destType",
              "STRUCTURED",
              "--outputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--inputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input"
            },
            {  
              "key":"--destType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--outputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"DropColumns\":[\"ocean_proximity\"],\n  \"MissingFields\": [],\n  \"FrequencySupport\":0.6,\n  \"MissingValuesWith\":\"Mean\",\n  \"ScaleType\":3,\n  \"PNorm\":2.0,\n  \"ScaleFunction\":[],\n  \"LabelCol\":\"median_house_value\",\n  \"LabelType\":\"Continious\",\n  \"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"ad479958-5a7e-4630-8dbb-2d0e41ab388d",
          "scheduleId":"c38d4351-4088-4d35-9f47-272e94c8d261",
          "createDate":"2018-Feb-08 07:15:10",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 07:15:11",
        "modified":"2018-Feb-08 07:15:42",
        "workflowId":"ad479958-5a7e-4630-8dbb-2d0e41ab388d",
        "scheduleId":"c38d4351-4088-4d35-9f47-272e94c8d261",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"rabbadi",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
        "parentScheduleId":"a845c218-027d-40f7-819a-a597cd94f4fc",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"ad479958-5a7e-4630-8dbb-2d0e41ab388d",
          "name":"HOUSEML_PREPROCES_FEB8",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Feb-08 07:15:11",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 07:15:43",
          "modified":"2018-Feb-08 07:16:20",
          "wfRunSummaryId":"605160b0d3a04906ab1877c0a0d09704",
          "workflowId":"ad479958-5a7e-4630-8dbb-2d0e41ab388d",
          "scheduleId":"c38d4351-4088-4d35-9f47-272e94c8d261",
          "oozieWFId":"0000405-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"HOUSEML_PREPROCES_FEB8",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/HOUSEML_PREPROCES_FEB8_ad479958-5a7e-4630-8dbb-2d0e41ab388d_c38d4351-4088-4d35-9f47-272e94c8d261/",
          "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
          "parentScheduleId":"a845c218-027d-40f7-819a-a597cd94f4fc",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000405-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 08 Feb 2018 07:15:38 GMT",
          "startTime":"Thu, 08 Feb 2018 07:15:38 GMT",
          "endTime":"Thu, 08 Feb 2018 07:16:14 GMT",
          "lastModTime":"Thu, 08 Feb 2018 07:16:14 GMT",
          "id":"0000405-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000405-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"1131a109fbfe48238beedd27c3825e17",
              "jwfmWfRunId":"605160b0d3a04906ab1877c0a0d09704",
              "jwfmApplicationId":"1c760b26-337c-4773-a9d1-03cfb94b86d8",
              "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1406/",
              "endTime":"Thu, 08 Feb 2018 07:16:14 GMT",
              "oozieExternalId":"job_1513239715582_1406",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000405-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 08 Feb 2018 07:15:38 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[Prep_Processing] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 06:52:37",
        "modified":"2018-Feb-08 06:52:37",
        "scheduleId":"e26f8bd1-ec42-4cc2-8755-a0ff6e801696",
        "scheduleType":"WORKFLOW",
        "workflowId":"4a88b81d-f790-46b4-9322-95acb504343e",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "rabbadi@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "rabbadi@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Feb-08 06:52:37",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 06:52:37",
          "modified":"2018-Feb-08 06:52:53",
          "applicationId":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"Preocessing",
          "ownerId":"rabbadi",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "STRUCTURED",
              "--inputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input",
              "--destType",
              "STRUCTURED",
              "--outputFile",
              "SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--inputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Input"
            },
            {  
              "key":"--destType",
              "value":"STRUCTURED"
            },
            {  
              "key":"--outputFile",
              "value":"SSO_cb37ce17-fb79-4b1d-8904-5559e21402f4/HOUSING/PreProcess_Output"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"DropColumns\":[\"ocean_proximity\"],\n  \"MissingFields\": [],\n  \"FrequencySupport\":0.6,\n  \"MissingValuesWith\":\"Mean\",\n  \"ScaleType\":3,\n  \"PNorm\":2.0,\n  \"ScaleFunction\":[],\n  \"LabelCol\":\"median_house_value\",\n  \"LabelType\":\"Continious\",\n  \"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"4a88b81d-f790-46b4-9322-95acb504343e",
          "scheduleId":"e26f8bd1-ec42-4cc2-8755-a0ff6e801696",
          "createDate":"2018-Feb-08 06:52:37",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Feb-08 06:52:37",
        "modified":"2018-Feb-08 06:53:09",
        "workflowId":"4a88b81d-f790-46b4-9322-95acb504343e",
        "scheduleId":"e26f8bd1-ec42-4cc2-8755-a0ff6e801696",
        "workflowName":"HOUSEML_PREPROCES_FEB8",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"rabbadi",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
        "parentScheduleId":"1efcd7dd-369c-43c0-9bc4-3cf9fc6bccf7",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"4a88b81d-f790-46b4-9322-95acb504343e",
          "name":"HOUSEML_PREPROCES_FEB8",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Feb-08 06:52:37",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Feb-08 06:53:09",
          "modified":"2018-Feb-08 06:53:49",
          "wfRunSummaryId":"e0e8bbb0e5cc446cbae396fb19aa5cee",
          "workflowId":"4a88b81d-f790-46b4-9322-95acb504343e",
          "scheduleId":"e26f8bd1-ec42-4cc2-8755-a0ff6e801696",
          "oozieWFId":"0000404-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"HOUSEML_PREPROCES_FEB8",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/HOUSEML_PREPROCES_FEB8_4a88b81d-f790-46b4-9322-95acb504343e_e26f8bd1-ec42-4cc2-8755-a0ff6e801696/",
          "opsWorkflowId":"9b989ab9-98bb-4ba9-89ab-a8a8b9bb8999",
          "parentScheduleId":"1efcd7dd-369c-43c0-9bc4-3cf9fc6bccf7",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000404-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 08 Feb 2018 06:53:05 GMT",
          "startTime":"Thu, 08 Feb 2018 06:53:05 GMT",
          "endTime":"Thu, 08 Feb 2018 06:53:38 GMT",
          "lastModTime":"Thu, 08 Feb 2018 06:53:38 GMT",
          "id":"0000404-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000404-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"314837151fa746728fcbf7dc1e24236e",
              "jwfmWfRunId":"e0e8bbb0e5cc446cbae396fb19aa5cee",
              "jwfmApplicationId":"0bf95a62-63f8-40a2-9bfa-5ed26c891e90",
              "runtimeId":"509ee3a6-eb14-4ddc-a183-f15cf7a4cad3",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1404/",
              "endTime":"Thu, 08 Feb 2018 06:53:38 GMT",
              "oozieExternalId":"job_1513239715582_1404",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000404-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 08 Feb 2018 06:53:05 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[Prep_Processing] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 18:28:51",
        "modified":"2018-Jan-18 18:28:51",
        "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
        "scheduleType":"WORKFLOW",
        "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
        "workflowName":"Hybrid_Dev_WF_3",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ahkhatta@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-18 18:28:51",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 18:28:51",
          "modified":"2018-Jan-18 18:29:18",
          "applicationId":"228bbd9d-914e-464d-85e2-b167df5a1565",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"demo",
          "ownerId":"sabekti",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"112b4d1b-ea78-4a72-a25b-f7cf22cbad63",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4 --conf spark.serializer=org.apache.spark.serializer.KryoSerializer",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "CSV",
              "--inputFile",
              "data/apps/MLSampleData/Classification/Input-Data",
              "--destType",
              "PARQUET",
              "--outputFile",
              "data/apps/MLSampleData/Classification/Prep-Data",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"CSV"
            },
            {  
              "key":"--inputFile",
              "value":"data/apps/MLSampleData/Classification/Input-Data"
            },
            {  
              "key":"--destType",
              "value":"PARQUET"
            },
            {  
              "key":"--outputFile",
              "value":"data/apps/MLSampleData/Classification/Prep-Data"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n\t\"DropColumns\":[\"Name\",\"Ticket\",\"Cabin\"],\n\t\"MissingFields\": [\"Age\"],\n\t\"FrequencySupport\":0.6,\n\t\"MissingValuesWith\":\"Mean\",\n\t\"ScaleType\":1,\n\t\"PNorm\":2.0,\n\t\"ScaleFunction\":[],\n\t\"LabelCol\":\"Survived\",\n\t\"LabelType\":\"Categorical\",\n\t\"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
          "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
          "createDate":"2018-Jan-18 18:28:51",
          "valid":true
        },
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 18:28:51",
          "modified":"2018-Jan-18 18:29:18",
          "applicationId":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Random_forest_classifier",
          "applicationDesc":"Demo",
          "ownerId":"sabekti",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.classification.rf.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"83ff66ad-6043-432b-8a53-d02da017423c",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Random_forest_classifier",
            "mainClass":"com.dummy.sso.creando.MLBatch.classification.rf.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4 --conf spark.serializer=org.apache.spark.serializer.KryoSerializer",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "PARQUET",
              "--inputFile",
              "data/apps/MLSampleData/Classification/Prep-Data",
              "--destType",
              "PARQUET",
              "--outputFile",
              "data/apps/MLSampleData/Classification/Model-Data",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"PARQUET"
            },
            {  
              "key":"--inputFile",
              "value":"data/apps/MLSampleData/Classification/Prep-Data"
            },
            {  
              "key":"--destType",
              "value":"PARQUET"
            },
            {  
              "key":"--outputFile",
              "value":"data/apps/MLSampleData/Classification/Model-Data"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"Category\":\"Classification\",\n  \"Family\":\"Multinomial\",\n  \"Labels\":\"prepLabel\",\n  \"Features\":[\"prepFeatures\"],\n  \"SplitSize\":0.8,\n  \"Seed\":1234,\n  \"GridSearch\":true,\n  \"CVKFold\":10,\n  \"MetricName\":\"accuracy\",\n  \"Impurity\":\"gini\",\n  \"MaxBins\": 32,\n  \"MaxDepth\":5,\n  \"MinInfoGain\":0.0,\n  \"MinInstancesPerNode\":1,\n  \"NumTrees\":5,\n  \"SubsetStrategies\":\"auto\",\n  \"Thresholds\":[0.5, 0.5],\n  \"GridMaxDepth\":[3,5,7],\n  \"GridNumTrees\":[3,5,7],\n  \"GridMinInstancePerNode\":[3,5,7],\n  \"GridImpurity\":[\"gini\", \"entropy\"]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
          "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
          "createDate":"2018-Jan-18 18:28:51",
          "valid":true
        },
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 18:28:51",
          "modified":"2018-Jan-18 18:29:18",
          "applicationId":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"App_Hybrid_Demo_Titanic_ZipFile",
          "applicationDesc":"Demo",
          "ownerId":"sabekti",
          "artifactPath":"csf_ms_5ea863eb-9d98-4e7c-9af9-ddefc4d9ca40.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.sdp.hdpzipops.HdpZipOps",
          "appMainJar":"hdpzipops_2.11-1.0-hadoop2.jar",
          "runtimeId":"dbe96e91-b2bd-403d-b815-470ff50c99e7",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"App_Hybrid_Demo_Titanic_ZipFile",
            "mainClass":"com.dummy.sso.sdp.hdpzipops.HdpZipOps",
            "jar":"hdpzipops_2.11-1.0-hadoop2.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "data/apps/MLSampleData/Classification/Model-Data",
              "data/apps/MLSampleData/arch/"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"data/apps/MLSampleData/arch/"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"data/apps/MLSampleData/Classification/Model-Data"
            }
          ],
          "status":"DRAFT",
          "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
          "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
          "createDate":"2018-Jan-18 18:28:51",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 18:28:51",
        "modified":"2018-Jan-18 18:29:34",
        "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
        "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
        "workflowName":"Hybrid_Dev_WF_3",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"sabekti",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"a98bbb8a-8aa8-499a-bbb9-9b8aaaabb9aa",
        "parentScheduleId":"ae5598a8-e718-4a50-aa60-8a1d84e3d294",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"62f49702-cf24-4b42-bdc9-55557644a02b",
          "name":"Hybrid_Dev_WF_3",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "name":"Random_forest_classifier",
              "type":"ApplicationTask",
              "applicationId":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "applicationName":"Random_forest_classifier"
            },
            {  
              "id":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "name":"App_Hybrid_Demo_Titanic_ZipFile",
              "type":"ApplicationTask",
              "applicationId":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "applicationName":"App_Hybrid_Demo_Titanic_ZipFile"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "targetRef":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "targetRef":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "defaultFlow":true
            },
            {  
              "id":"f3",
              "name":"F3",
              "type":"SequenceFlow",
              "sourceRef":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f4",
              "name":"F4",
              "type":"SequenceFlow",
              "sourceRef":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            },
            {  
              "id":"f5",
              "name":"F5",
              "type":"SequenceFlow",
              "sourceRef":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            },
            {  
              "id":"f6",
              "name":"F6",
              "type":"SequenceFlow",
              "sourceRef":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-18 18:28:51",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 18:29:34",
          "modified":"2018-Jan-18 11:00:24",
          "wfRunSummaryId":"7a3af39a3bf4444b93ae96434184c0a9",
          "workflowId":"62f49702-cf24-4b42-bdc9-55557644a02b",
          "scheduleId":"17dadc08-c8f2-477e-ad96-b99ef177989f",
          "oozieWFId":"0000305-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"SUCCEEDED",
          "oozieRun":0,
          "appName":"Hybrid_Dev_WF_3",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/Hybrid_Dev_WF_3_62f49702-cf24-4b42-bdc9-55557644a02b_17dadc08-c8f2-477e-ad96-b99ef177989f/",
          "opsWorkflowId":"a98bbb8a-8aa8-499a-bbb9-9b8aaaabb9aa",
          "parentScheduleId":"ae5598a8-e718-4a50-aa60-8a1d84e3d294",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000305-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 18 Jan 2018 18:29:30 GMT",
          "startTime":"Thu, 18 Jan 2018 18:29:30 GMT",
          "endTime":"Thu, 18 Jan 2018 19:00:17 GMT",
          "lastModTime":"Thu, 18 Jan 2018 19:00:17 GMT",
          "id":"0000305-171219164223360-oozie-oozi-W",
          "status":"SUCCEEDED",
          "toString":"Workflow id[0000305-171219164223360-oozie-oozi-W] status[SUCCEEDED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"e6e7eb4e043c4742afcb6836a361b73d",
              "jwfmWfRunId":"7a3af39a3bf4444b93ae96434184c0a9",
              "jwfmApplicationId":"228bbd9d-914e-464d-85e2-b167df5a1565",
              "runtimeId":"112b4d1b-ea78-4a72-a25b-f7cf22cbad63",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1181/",
              "endTime":"Thu, 18 Jan 2018 18:30:25 GMT",
              "oozieExternalId":"job_1513239715582_1181",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000305-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Thu, 18 Jan 2018 18:29:30 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[Prep_Processing] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            },
            {  
              "instance_id":"e8eb91b843a040c6ac0c29cb4e68443d",
              "jwfmWfRunId":"7a3af39a3bf4444b93ae96434184c0a9",
              "jwfmApplicationId":"39cfe273-c741-41e2-9c0a-a1930686f5b1",
              "runtimeId":"83ff66ad-6043-432b-8a53-d02da017423c",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1183/",
              "endTime":"Thu, 18 Jan 2018 18:59:39 GMT",
              "oozieExternalId":"job_1513239715582_1183",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000305-171219164223360-oozie-oozi-W@Random_forest_classifier",
              "oozieActionName":"Random_forest_classifier",
              "startTime":"Thu, 18 Jan 2018 18:30:25 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[Random_forest_classifier] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            },
            {  
              "instance_id":"ce9e9b3ccf4841a186dd0f7685940b5d",
              "jwfmWfRunId":"7a3af39a3bf4444b93ae96434184c0a9",
              "jwfmApplicationId":"7ed9d0e5-3feb-4d91-bc5a-170b487504f3",
              "runtimeId":"dbe96e91-b2bd-403d-b815-470ff50c99e7",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1185/",
              "endTime":"Thu, 18 Jan 2018 19:00:17 GMT",
              "oozieExternalId":"job_1513239715582_1185",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000305-171219164223360-oozie-oozi-W@App_Hybrid_Demo_Titanic_ZipFile",
              "oozieActionName":"App_Hybrid_Demo_Titanic_ZipFile",
              "startTime":"Thu, 18 Jan 2018 18:59:39 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[App_Hybrid_Demo_Titanic_ZipFile] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:42:58",
        "modified":"2018-Jan-18 12:42:58",
        "scheduleId":"ca3f022f-35b9-4289-9e62-15080f529e83",
        "scheduleType":"WORKFLOW",
        "workflowId":"425f57c7-297f-401f-8b77-75441a189f26",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-18 12:42:58",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:42:57",
          "modified":"2018-Jan-18 12:43:04",
          "applicationId":"46a0be55-0924-4ce6-b011-7f758d61185f",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/uuuser/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/uuuser/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"425f57c7-297f-401f-8b77-75441a189f26",
          "scheduleId":"ca3f022f-35b9-4289-9e62-15080f529e83",
          "createDate":"2018-Jan-18 12:42:57",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:42:57",
        "modified":"2018-Jan-18 12:43:20",
        "workflowId":"425f57c7-297f-401f-8b77-75441a189f26",
        "scheduleId":"ca3f022f-35b9-4289-9e62-15080f529e83",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"be975ef2-de83-415b-a295-02c59cef4430",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"425f57c7-297f-401f-8b77-75441a189f26",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-18 12:42:57",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:43:20",
          "modified":"2018-Jan-18 12:44:13",
          "wfRunSummaryId":"0f86f395599f43eea24f9fe443251c3c",
          "workflowId":"425f57c7-297f-401f-8b77-75441a189f26",
          "scheduleId":"ca3f022f-35b9-4289-9e62-15080f529e83",
          "oozieWFId":"0000304-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_425f57c7-297f-401f-8b77-75441a189f26_ca3f022f-35b9-4289-9e62-15080f529e83/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"be975ef2-de83-415b-a295-02c59cef4430",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000304-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 18 Jan 2018 12:43:16 GMT",
          "startTime":"Thu, 18 Jan 2018 12:43:16 GMT",
          "endTime":"Thu, 18 Jan 2018 12:43:52 GMT",
          "lastModTime":"Thu, 18 Jan 2018 12:43:52 GMT",
          "id":"0000304-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000304-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"88fbb70a845b46b2a8ef70eedaad50b1",
              "jwfmWfRunId":"0f86f395599f43eea24f9fe443251c3c",
              "jwfmApplicationId":"46a0be55-0924-4ce6-b011-7f758d61185f",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1179/",
              "endTime":"Thu, 18 Jan 2018 12:43:52 GMT",
              "oozieExternalId":"job_1513239715582_1179",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000304-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Thu, 18 Jan 2018 12:43:16 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:23:20",
        "modified":"2018-Jan-18 12:23:20",
        "scheduleId":"06e1e0b3-6b25-4849-bd86-a8c31a15d82d",
        "scheduleType":"WORKFLOW",
        "workflowId":"2a720830-4dcd-45a4-96d1-7ce47402cadb",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-18 12:23:20",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:23:20",
          "modified":"2018-Jan-18 12:23:26",
          "applicationId":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/uuuser/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/uuuser/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"2a720830-4dcd-45a4-96d1-7ce47402cadb",
          "scheduleId":"06e1e0b3-6b25-4849-bd86-a8c31a15d82d",
          "createDate":"2018-Jan-18 12:23:20",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:23:20",
        "modified":"2018-Jan-18 12:23:42",
        "workflowId":"2a720830-4dcd-45a4-96d1-7ce47402cadb",
        "scheduleId":"06e1e0b3-6b25-4849-bd86-a8c31a15d82d",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"83324b9c-2b21-47e9-a559-ebb37a47687f",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"2a720830-4dcd-45a4-96d1-7ce47402cadb",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-18 12:23:20",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:23:42",
          "modified":"2018-Jan-18 12:24:14",
          "wfRunSummaryId":"e1621b3924b64f22acc563ce494ae083",
          "workflowId":"2a720830-4dcd-45a4-96d1-7ce47402cadb",
          "scheduleId":"06e1e0b3-6b25-4849-bd86-a8c31a15d82d",
          "oozieWFId":"0000303-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_2a720830-4dcd-45a4-96d1-7ce47402cadb_06e1e0b3-6b25-4849-bd86-a8c31a15d82d/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"83324b9c-2b21-47e9-a559-ebb37a47687f",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000303-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 18 Jan 2018 12:23:38 GMT",
          "startTime":"Thu, 18 Jan 2018 12:23:38 GMT",
          "endTime":"Thu, 18 Jan 2018 12:24:10 GMT",
          "lastModTime":"Thu, 18 Jan 2018 12:24:10 GMT",
          "id":"0000303-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000303-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"343f53f2e69140a9bf4ce5c37705f291",
              "jwfmWfRunId":"e1621b3924b64f22acc563ce494ae083",
              "jwfmApplicationId":"69450277-f1b9-43c2-a03d-3fc8ee579e65",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1177/",
              "endTime":"Thu, 18 Jan 2018 12:24:10 GMT",
              "oozieExternalId":"job_1513239715582_1177",
              "externalStatus":"FAILED/KILLED",
              "oozieWorkFlowId":"0000303-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Thu, 18 Jan 2018 12:23:38 GMT",
              "oozieActionStatus":"ERROR",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[ERROR]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java",
              "oozieErrorCode":"JA018",
              "oozieErrorMessage":"java.lang.Exception: JWFM Submitted Spark Job has failed with Error Code."
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:21:17",
        "modified":"2018-Jan-18 12:21:17",
        "scheduleId":"c04b7edd-5243-4526-99f3-c5007665e083",
        "scheduleType":"WORKFLOW",
        "workflowId":"0164956d-fdc0-450a-91de-4f6ec57fb02b",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-18 12:21:17",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:21:17",
          "modified":"2018-Jan-18 12:21:23",
          "applicationId":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/user/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/user/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"0164956d-fdc0-450a-91de-4f6ec57fb02b",
          "scheduleId":"c04b7edd-5243-4526-99f3-c5007665e083",
          "createDate":"2018-Jan-18 12:21:17",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-18 12:21:17",
        "modified":"2018-Jan-18 12:21:39",
        "workflowId":"0164956d-fdc0-450a-91de-4f6ec57fb02b",
        "scheduleId":"c04b7edd-5243-4526-99f3-c5007665e083",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"3448cab7-cba8-491d-975d-7f1592176ded",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"0164956d-fdc0-450a-91de-4f6ec57fb02b",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-18 12:21:17",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-18 12:21:39",
          "modified":"2018-Jan-18 12:22:44",
          "wfRunSummaryId":"0ae90e1a1d004bf4af9c649165e07181",
          "workflowId":"0164956d-fdc0-450a-91de-4f6ec57fb02b",
          "scheduleId":"c04b7edd-5243-4526-99f3-c5007665e083",
          "oozieWFId":"0000302-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"SUCCEEDED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_0164956d-fdc0-450a-91de-4f6ec57fb02b_c04b7edd-5243-4526-99f3-c5007665e083/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"3448cab7-cba8-491d-975d-7f1592176ded",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000302-171219164223360-oozie-oozi-W",
          "createdTime":"Thu, 18 Jan 2018 12:21:35 GMT",
          "startTime":"Thu, 18 Jan 2018 12:21:35 GMT",
          "endTime":"Thu, 18 Jan 2018 12:22:15 GMT",
          "lastModTime":"Thu, 18 Jan 2018 12:22:15 GMT",
          "id":"0000302-171219164223360-oozie-oozi-W",
          "status":"SUCCEEDED",
          "toString":"Workflow id[0000302-171219164223360-oozie-oozi-W] status[SUCCEEDED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"a8e1c34779cd4fd2b2ef6ac7c2c1bfd6",
              "jwfmWfRunId":"0ae90e1a1d004bf4af9c649165e07181",
              "jwfmApplicationId":"806b498e-5ec8-4f07-aee7-7ee3944aade3",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1175/",
              "endTime":"Thu, 18 Jan 2018 12:22:15 GMT",
              "oozieExternalId":"job_1513239715582_1175",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000302-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Thu, 18 Jan 2018 12:21:35 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:50:07",
        "modified":"2018-Jan-17 18:50:07",
        "scheduleId":"d8c67c98-bf5f-4379-989d-41b1e56bb0cf",
        "scheduleType":"WORKFLOW",
        "workflowId":"5dfd9ffe-58db-4976-90ed-db9a96cde20c",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-17 18:50:07",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:50:07",
          "modified":"2018-Jan-17 18:50:13",
          "applicationId":"5804ffe9-6060-4ade-9541-d6becf5ef354",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/user/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/user/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"5dfd9ffe-58db-4976-90ed-db9a96cde20c",
          "scheduleId":"d8c67c98-bf5f-4379-989d-41b1e56bb0cf",
          "createDate":"2018-Jan-17 18:50:07",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:50:07",
        "modified":"2018-Jan-17 18:50:34",
        "workflowId":"5dfd9ffe-58db-4976-90ed-db9a96cde20c",
        "scheduleId":"d8c67c98-bf5f-4379-989d-41b1e56bb0cf",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"154ec4be-cfc5-43b3-981a-61452b1fdc5a",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"5dfd9ffe-58db-4976-90ed-db9a96cde20c",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-17 18:50:07",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:50:34",
          "modified":"2018-Jan-17 18:51:20",
          "wfRunSummaryId":"bd912bd0780e438cb1602a9e94e74d84",
          "workflowId":"5dfd9ffe-58db-4976-90ed-db9a96cde20c",
          "scheduleId":"d8c67c98-bf5f-4379-989d-41b1e56bb0cf",
          "oozieWFId":"0000295-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"SUCCEEDED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_5dfd9ffe-58db-4976-90ed-db9a96cde20c_d8c67c98-bf5f-4379-989d-41b1e56bb0cf/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"154ec4be-cfc5-43b3-981a-61452b1fdc5a",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000295-171219164223360-oozie-oozi-W",
          "createdTime":"Wed, 17 Jan 2018 18:50:29 GMT",
          "startTime":"Wed, 17 Jan 2018 18:50:29 GMT",
          "endTime":"Wed, 17 Jan 2018 18:51:10 GMT",
          "lastModTime":"Wed, 17 Jan 2018 18:51:10 GMT",
          "id":"0000295-171219164223360-oozie-oozi-W",
          "status":"SUCCEEDED",
          "toString":"Workflow id[0000295-171219164223360-oozie-oozi-W] status[SUCCEEDED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"5915b356452f4713a1e8ca288b259bd3",
              "jwfmWfRunId":"bd912bd0780e438cb1602a9e94e74d84",
              "jwfmApplicationId":"5804ffe9-6060-4ade-9541-d6becf5ef354",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1160/",
              "endTime":"Wed, 17 Jan 2018 18:51:10 GMT",
              "oozieExternalId":"job_1513239715582_1160",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000295-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Wed, 17 Jan 2018 18:50:29 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:46:14",
        "modified":"2018-Jan-17 18:46:14",
        "scheduleId":"5c3a1047-70d3-43a7-998a-3b613996b7fd",
        "scheduleType":"WORKFLOW",
        "workflowId":"909887d9-b77b-4ed4-b174-72f516d32c01",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-17 18:46:14",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:46:14",
          "modified":"2018-Jan-17 18:46:20",
          "applicationId":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/user/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/user/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"909887d9-b77b-4ed4-b174-72f516d32c01",
          "scheduleId":"5c3a1047-70d3-43a7-998a-3b613996b7fd",
          "createDate":"2018-Jan-17 18:46:14",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:46:14",
        "modified":"2018-Jan-17 18:46:36",
        "workflowId":"909887d9-b77b-4ed4-b174-72f516d32c01",
        "scheduleId":"5c3a1047-70d3-43a7-998a-3b613996b7fd",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"14493bde-de08-447a-ae48-bb0b62715237",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"909887d9-b77b-4ed4-b174-72f516d32c01",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-17 18:46:14",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:46:36",
          "modified":"2018-Jan-17 18:47:20",
          "wfRunSummaryId":"eeb21e94b26a42788b1c115ba1915c62",
          "workflowId":"909887d9-b77b-4ed4-b174-72f516d32c01",
          "scheduleId":"5c3a1047-70d3-43a7-998a-3b613996b7fd",
          "oozieWFId":"0000294-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"KILLED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_909887d9-b77b-4ed4-b174-72f516d32c01_5c3a1047-70d3-43a7-998a-3b613996b7fd/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"14493bde-de08-447a-ae48-bb0b62715237",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000294-171219164223360-oozie-oozi-W",
          "createdTime":"Wed, 17 Jan 2018 18:46:31 GMT",
          "startTime":"Wed, 17 Jan 2018 18:46:31 GMT",
          "endTime":"Wed, 17 Jan 2018 18:46:50 GMT",
          "lastModTime":"Wed, 17 Jan 2018 18:46:52 GMT",
          "id":"0000294-171219164223360-oozie-oozi-W",
          "status":"KILLED",
          "toString":"Workflow id[0000294-171219164223360-oozie-oozi-W] status[KILLED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"f65aac0911ef415cb44331b7e3039ffd",
              "jwfmWfRunId":"eeb21e94b26a42788b1c115ba1915c62",
              "jwfmApplicationId":"bb8e15d3-9600-4a7e-a5c8-ad691d3e2b76",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1158/",
              "endTime":"Wed, 17 Jan 2018 18:46:52 GMT",
              "oozieExternalId":"job_1513239715582_1158",
              "externalStatus":"KILLED",
              "oozieWorkFlowId":"0000294-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Wed, 17 Jan 2018 18:46:32 GMT",
              "oozieActionStatus":"KILLED",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[KILLED]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:44:03",
        "modified":"2018-Jan-17 18:44:03",
        "scheduleId":"ab55b778-619c-410b-83b7-eead53c48f8e",
        "scheduleType":"WORKFLOW",
        "workflowId":"03151ea1-3285-4040-a75a-2d3fa24e3483",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ravindth@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ravindth@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-17 18:44:03",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:44:03",
          "modified":"2018-Jan-17 18:44:09",
          "applicationId":"10748056-3e4f-42fa-8d98-3815da50fb1b",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"RAVINDRA_SPARK_APP_DEC_05",
          "applicationDesc":"test",
          "ownerId":"rabbadi",
          "artifactPath":"csf_ms_3f895011-29e6-43d6-9f7e-24bc348f2cbc.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.creando.controller.bootBatch",
          "appMainJar":"creando_batch-wc-1.0.0.jar",
          "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"RAVINDRA_SPARK_APP_DEC_05",
            "mainClass":"com.dummy.creando.controller.bootBatch",
            "jar":"creando_batch-wc-1.0.0.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "/user/creando/readconfig-test/input/json_input.json",
              "/user/creando/readconfig-test/output/wc"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"/user/creando/readconfig-test/output/wc"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"/user/creando/readconfig-test/input/json_input.json"
            }
          ],
          "status":"DRAFT",
          "workflowId":"03151ea1-3285-4040-a75a-2d3fa24e3483",
          "scheduleId":"ab55b778-619c-410b-83b7-eead53c48f8e",
          "createDate":"2018-Jan-17 18:44:03",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-17 18:44:03",
        "modified":"2018-Jan-17 18:44:25",
        "workflowId":"03151ea1-3285-4040-a75a-2d3fa24e3483",
        "scheduleId":"ab55b778-619c-410b-83b7-eead53c48f8e",
        "workflowName":"RAVINDRA_WF_SPARK_DEC_05",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"ravindth",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
        "parentScheduleId":"e24ebda8-c580-439b-a16e-420e12b68569",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"03151ea1-3285-4040-a75a-2d3fa24e3483",
          "name":"RAVINDRA_WF_SPARK_DEC_05",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "name":"RAVINDRA_SPARK_APP_DEC_05",
              "type":"ApplicationTask",
              "applicationId":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "applicationName":"RAVINDRA_SPARK_APP_DEC_05"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-17 18:44:03",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-17 18:44:25",
          "modified":"2018-Jan-17 18:45:20",
          "wfRunSummaryId":"180f361f1ea042bcb9679cdd2f2d7a47",
          "workflowId":"03151ea1-3285-4040-a75a-2d3fa24e3483",
          "scheduleId":"ab55b778-619c-410b-83b7-eead53c48f8e",
          "oozieWFId":"0000293-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"SUCCEEDED",
          "oozieRun":0,
          "appName":"RAVINDRA_WF_SPARK_DEC_05",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/RAVINDRA_WF_SPARK_DEC_05_03151ea1-3285-4040-a75a-2d3fa24e3483_ab55b778-619c-410b-83b7-eead53c48f8e/",
          "opsWorkflowId":"8bb88aaa-8b8b-4a89-8aba-ba88bba9ab9a",
          "parentScheduleId":"e24ebda8-c580-439b-a16e-420e12b68569",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000293-171219164223360-oozie-oozi-W",
          "createdTime":"Wed, 17 Jan 2018 18:44:21 GMT",
          "startTime":"Wed, 17 Jan 2018 18:44:21 GMT",
          "endTime":"Wed, 17 Jan 2018 18:44:57 GMT",
          "lastModTime":"Wed, 17 Jan 2018 18:44:57 GMT",
          "id":"0000293-171219164223360-oozie-oozi-W",
          "status":"SUCCEEDED",
          "toString":"Workflow id[0000293-171219164223360-oozie-oozi-W] status[SUCCEEDED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"43769046cd8d4a55b69deba3836cfc41",
              "jwfmWfRunId":"180f361f1ea042bcb9679cdd2f2d7a47",
              "jwfmApplicationId":"10748056-3e4f-42fa-8d98-3815da50fb1b",
              "runtimeId":"7646265c-5129-4f59-a3dd-128c6b9d78d8",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1156/",
              "endTime":"Wed, 17 Jan 2018 18:44:57 GMT",
              "oozieExternalId":"job_1513239715582_1156",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000293-171219164223360-oozie-oozi-W@RAVINDRA_SPARK_APP_DEC_05",
              "oozieActionName":"RAVINDRA_SPARK_APP_DEC_05",
              "startTime":"Wed, 17 Jan 2018 18:44:21 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[RAVINDRA_SPARK_APP_DEC_05] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    },
    {  
      "schedule":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-14 23:30:08",
        "modified":"2018-Jan-14 23:30:08",
        "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
        "scheduleType":"WORKFLOW",
        "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
        "workflowName":"Hybrid_Dev_WF_3",
        "reoccurrence":"No",
        "interval":0,
        "executionEnabled":true,
        "notification":{  
          "onInsStartAlertEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsStartWarningEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsEndAlertEmailAddr":[  
            "ahkhatta@dummy.com"
          ],
          "onInsEndWarningEmailAddr":[  
            "ahkhatta@dummy.com"
          ]
        },
        "scheduleFlag":"Immediate",
        "createDate":"2018-Jan-14 23:30:08",
        "valid":true
      },
      "batchApplications":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-14 23:30:08",
          "modified":"2018-Jan-14 23:30:29",
          "applicationId":"f1510c45-c4b5-4197-972e-5708ae516817",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Prep_Processing",
          "applicationDesc":"demo",
          "ownerId":"sabekti",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"112b4d1b-ea78-4a72-a25b-f7cf22cbad63",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Prep_Processing",
            "mainClass":"com.dummy.sso.creando.MLBatch.preprocessing.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4 --conf spark.serializer=org.apache.spark.serializer.KryoSerializer",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "CSV",
              "--inputFile",
              "data/apps/MLSampleData/Classification/Input-Data",
              "--destType",
              "PARQUET",
              "--outputFile",
              "data/apps/MLSampleData/Classification/Prep-Data",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"CSV"
            },
            {  
              "key":"--inputFile",
              "value":"data/apps/MLSampleData/Classification/Input-Data"
            },
            {  
              "key":"--destType",
              "value":"PARQUET"
            },
            {  
              "key":"--outputFile",
              "value":"data/apps/MLSampleData/Classification/Prep-Data"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n\t\"DropColumns\":[\"Name\",\"Ticket\",\"Cabin\"],\n\t\"MissingFields\": [\"Age\"],\n\t\"FrequencySupport\":0.6,\n\t\"MissingValuesWith\":\"Mean\",\n\t\"ScaleType\":1,\n\t\"PNorm\":2.0,\n\t\"ScaleFunction\":[],\n\t\"LabelCol\":\"Survived\",\n\t\"LabelType\":\"Categorical\",\n\t\"FeaturesCol\":[]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
          "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
          "createDate":"2018-Jan-14 23:30:08",
          "valid":true
        },
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-14 23:30:08",
          "modified":"2018-Jan-14 23:30:29",
          "applicationId":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"Random_forest_classifier",
          "applicationDesc":"Demo",
          "ownerId":"sabekti",
          "artifactPath":"creandomlsyslib",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.creando.MLBatch.classification.rf.start",
          "appMainJar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
          "runtimeId":"83ff66ad-6043-432b-8a53-d02da017423c",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"Random_forest_classifier",
            "mainClass":"com.dummy.sso.creando.MLBatch.classification.rf.start",
            "jar":"$APP_PATH/lib/mlbatch_2.11-1.0-hadoop2.jar",
            "classpath":"$APP_PATH/lib/scopt_2.11-3.6.0.jar,$APP_PATH/lib/scala-logging_2.11-3.5.0.jar",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4 --conf spark.serializer=org.apache.spark.serializer.KryoSerializer",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "--master",
              "yarn",
              "--mlConf",
              "$APP_PATH/conf/mlconfig.json",
              "--srcType",
              "PARQUET",
              "--inputFile",
              "data/apps/MLSampleData/Classification/Prep-Data",
              "--destType",
              "PARQUET",
              "--outputFile",
              "data/apps/MLSampleData/Classification/Model-Data",
              "--inParams",
              null
            ]
          },
          "customProperties":[  
            {  
              "key":"--master",
              "value":"yarn"
            },
            {  
              "key":"--mlConf",
              "value":"$APP_PATH/conf/mlconfig.json"
            },
            {  
              "key":"--srcType",
              "value":"PARQUET"
            },
            {  
              "key":"--inputFile",
              "value":"data/apps/MLSampleData/Classification/Prep-Data"
            },
            {  
              "key":"--destType",
              "value":"PARQUET"
            },
            {  
              "key":"--outputFile",
              "value":"data/apps/MLSampleData/Classification/Model-Data"
            },
            {  
              "key":"--inParams",
              "value":null
            }
          ],
          "configsAsFiles":[  
            {  
              "key":"mlconfig.json",
              "value":"{\n  \"Category\":\"Classification\",\n  \"Family\":\"Multinomial\",\n  \"Labels\":\"prepLabel\",\n  \"Features\":[\"prepFeatures\"],\n  \"SplitSize\":0.8,\n  \"Seed\":1234,\n  \"GridSearch\":true,\n  \"CVKFold\":10,\n  \"MetricName\":\"accuracy\",\n  \"Impurity\":\"gini\",\n  \"MaxBins\": 32,\n  \"MaxDepth\":5,\n  \"MinInfoGain\":0.0,\n  \"MinInstancesPerNode\":1,\n  \"NumTrees\":5,\n  \"SubsetStrategies\":\"auto\",\n  \"Thresholds\":[0.5, 0.5],\n  \"GridMaxDepth\":[3,5,7],\n  \"GridNumTrees\":[3,5,7],\n  \"GridMinInstancePerNode\":[3,5,7],\n  \"GridImpurity\":[\"gini\", \"entropy\"]\n}"
            }
          ],
          "status":"DRAFT",
          "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
          "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
          "createDate":"2018-Jan-14 23:30:08",
          "valid":true
        },
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-14 23:30:08",
          "modified":"2018-Jan-14 23:30:29",
          "applicationId":"7747a871-7120-4896-a2f2-2a6c764da852",
          "applicationType":"SPARK",
          "applicationTypeVersion":"2.X",
          "applicationName":"App_Hybrid_Demo_Titanic_ZipFile",
          "applicationDesc":"Demo",
          "ownerId":"sabekti",
          "artifactPath":"csf_ms_5ea863eb-9d98-4e7c-9af9-ddefc4d9ca40.tar",
          "logLevel":"DEBUG",
          "visibility":"private",
          "appMainClass":"com.dummy.sso.sdp.hdpzipops.HdpZipOps",
          "appMainJar":"hdpzipops_2.11-1.0-hadoop2.jar",
          "runtimeId":"dbe96e91-b2bd-403d-b815-470ff50c99e7",
          "runtimeParameters":{  
            "type":"SPARK",
            "configuration":[  

            ],
            "master":"yarn",
            "jobName":"App_Hybrid_Demo_Titanic_ZipFile",
            "mainClass":"com.dummy.sso.sdp.hdpzipops.HdpZipOps",
            "jar":"hdpzipops_2.11-1.0-hadoop2.jar",
            "classpath":"",
            "sparkOpts":"--conf spark.executor.memory=4G --conf spark.driver.memory=6G --conf spark.executor.cores=2 --conf spark.executor.instances=4",
            "files":"",
            "propertiesFile":"",
            "args":[  
              "data/apps/MLSampleData/Classification/Model-Data",
              "data/apps/MLSampleData/arch/"
            ]
          },
          "customProperties":[  
            {  
              "key":"properties",
              "value":"{}"
            },
            {  
              "key":"creando.app.arg.2",
              "value":"data/apps/MLSampleData/arch/"
            },
            {  
              "key":"creando.app.arg.1",
              "value":"data/apps/MLSampleData/Classification/Model-Data"
            }
          ],
          "status":"DRAFT",
          "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
          "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
          "createDate":"2018-Jan-14 23:30:08",
          "valid":true
        }
      ],
      "wfDefinition":{  
        "orgId":"DEFAULT",
        "created":"2018-Jan-14 23:30:08",
        "modified":"2018-Jan-14 23:30:46",
        "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
        "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
        "workflowName":"Hybrid_Dev_WF_3",
        "workflowDesc":"Not Available",
        "version":"Not Available",
        "ownerId":"sabekti",
        "ownerName":"ownerName",
        "visibility":"private",
        "opsWorkflowId":"a98bbb8a-8aa8-499a-bbb9-9b8aaaabb9aa",
        "parentScheduleId":"ac50163c-a40f-40fb-872b-af11d2ad36ac",
        "status":"SCHEDULEWF_TRIGGERED",
        "process":{  
          "id":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
          "name":"Hybrid_Dev_WF_3",
          "nodes":[  
            {  
              "id":"startNodeId",
              "name":"StartNode",
              "type":"StartEvent"
            },
            {  
              "id":"f1510c45-c4b5-4197-972e-5708ae516817",
              "name":"Prep_Processing",
              "type":"ApplicationTask",
              "applicationId":"f1510c45-c4b5-4197-972e-5708ae516817",
              "applicationName":"Prep_Processing"
            },
            {  
              "id":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "name":"Random_forest_classifier",
              "type":"ApplicationTask",
              "applicationId":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "applicationName":"Random_forest_classifier"
            },
            {  
              "id":"7747a871-7120-4896-a2f2-2a6c764da852",
              "name":"App_Hybrid_Demo_Titanic_ZipFile",
              "type":"ApplicationTask",
              "applicationId":"7747a871-7120-4896-a2f2-2a6c764da852",
              "applicationName":"App_Hybrid_Demo_Titanic_ZipFile"
            },
            {  
              "id":"endNodeId",
              "name":"EndNode",
              "type":"EndEvent"
            },
            {  
              "id":"errorEndNodeId",
              "name":"ErrorEndNode",
              "type":"ErrorEndEvent"
            }
          ],
          "flows":[  
            {  
              "id":"f0",
              "name":"F0",
              "type":"SequenceFlow",
              "sourceRef":"startNodeId",
              "targetRef":"f1510c45-c4b5-4197-972e-5708ae516817",
              "defaultFlow":true
            },
            {  
              "id":"f1",
              "name":"F1",
              "type":"SequenceFlow",
              "sourceRef":"f1510c45-c4b5-4197-972e-5708ae516817",
              "targetRef":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "defaultFlow":true
            },
            {  
              "id":"f2",
              "name":"F2",
              "type":"SequenceFlow",
              "sourceRef":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "targetRef":"7747a871-7120-4896-a2f2-2a6c764da852",
              "defaultFlow":true
            },
            {  
              "id":"f3",
              "name":"F3",
              "type":"SequenceFlow",
              "sourceRef":"7747a871-7120-4896-a2f2-2a6c764da852",
              "targetRef":"endNodeId",
              "defaultFlow":true
            },
            {  
              "id":"f4",
              "name":"F4",
              "type":"SequenceFlow",
              "sourceRef":"f1510c45-c4b5-4197-972e-5708ae516817",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            },
            {  
              "id":"f5",
              "name":"F5",
              "type":"SequenceFlow",
              "sourceRef":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            },
            {  
              "id":"f6",
              "name":"F6",
              "type":"SequenceFlow",
              "sourceRef":"7747a871-7120-4896-a2f2-2a6c764da852",
              "targetRef":"errorEndNodeId",
              "defaultFlow":false
            }
          ]
        },
        "createDate":"2018-Jan-14 23:30:08",
        "trackInfo":"DRAFT->VALID->ACCEPTED->GET_ALL_WORKLFOW_JARS_JOB_CREATED->GET_ALL_WORKLFOW_JARS_JOB_TRIGGERED->GET_ALL_WORKLFOW_JARS_SUCCESS->DEPLOY_JOB_CREATED->DEPLOY_JOB_TRIGGERED->DEPLOYED->SCHEDULED->SCHEDULEWF_TRIGGERED",
        "valid":true
      },
      "batchWorkflowRunInfo":[  
        {  
          "orgId":"DEFAULT",
          "created":"2018-Jan-14 23:30:46",
          "modified":"2018-Jan-15 00:02:20",
          "wfRunSummaryId":"aa89d179f8584bee824aa4eed9242188",
          "workflowId":"cd76a1ce-4445-428f-9ca3-122fdfc61147",
          "scheduleId":"533651aa-403f-49b4-a126-9b3ecc89f78d",
          "oozieWFId":"0000278-171219164223360-oozie-oozi-W",
          "jwfmRun":1,
          "jwfmWFRunStatus":"SUCCEEDED",
          "oozieRun":0,
          "appName":"Hybrid_Dev_WF_3",
          "appPath":"hdfs://creando-dev33.dummy.com:8020/user/creando/oozieProject/Hybrid_Dev_WF_3_cd76a1ce-4445-428f-9ca3-122fdfc61147_533651aa-403f-49b4-a126-9b3ecc89f78d/",
          "opsWorkflowId":"a98bbb8a-8aa8-499a-bbb9-9b8aaaabb9aa",
          "parentScheduleId":"ac50163c-a40f-40fb-872b-af11d2ad36ac",
          "consoleUrl":"http://creando-dev32.dummy.com:11000/oozie?job=0000278-171219164223360-oozie-oozi-W",
          "createdTime":"Sun, 14 Jan 2018 23:30:41 GMT",
          "startTime":"Sun, 14 Jan 2018 23:30:41 GMT",
          "endTime":"Mon, 15 Jan 2018 00:02:10 GMT",
          "lastModTime":"Mon, 15 Jan 2018 00:02:10 GMT",
          "id":"0000278-171219164223360-oozie-oozi-W",
          "status":"SUCCEEDED",
          "toString":"Workflow id[0000278-171219164223360-oozie-oozi-W] status[SUCCEEDED]",
          "ozUser":"creando",
          "jobRunHistory":[  
            {  
              "instance_id":"30685d44519b452fb948a66773358652",
              "jwfmWfRunId":"aa89d179f8584bee824aa4eed9242188",
              "jwfmApplicationId":"f1510c45-c4b5-4197-972e-5708ae516817",
              "runtimeId":"112b4d1b-ea78-4a72-a25b-f7cf22cbad63",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1122/",
              "endTime":"Sun, 14 Jan 2018 23:31:35 GMT",
              "oozieExternalId":"job_1513239715582_1122",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000278-171219164223360-oozie-oozi-W@Prep_Processing",
              "oozieActionName":"Prep_Processing",
              "startTime":"Sun, 14 Jan 2018 23:30:42 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[Prep_Processing] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            },
            {  
              "instance_id":"a59c092d276a4a37bf9b2177afcc060f",
              "jwfmWfRunId":"aa89d179f8584bee824aa4eed9242188",
              "jwfmApplicationId":"7f10f2b7-31d6-42c1-b0aa-05416a36c7a1",
              "runtimeId":"83ff66ad-6043-432b-8a53-d02da017423c",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1124/",
              "endTime":"Mon, 15 Jan 2018 00:01:39 GMT",
              "oozieExternalId":"job_1513239715582_1124",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000278-171219164223360-oozie-oozi-W@Random_forest_classifier",
              "oozieActionName":"Random_forest_classifier",
              "startTime":"Sun, 14 Jan 2018 23:31:35 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[Random_forest_classifier] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            },
            {  
              "instance_id":"6c99ccf78b9f49bf99907313f7872760",
              "jwfmWfRunId":"aa89d179f8584bee824aa4eed9242188",
              "jwfmApplicationId":"7747a871-7120-4896-a2f2-2a6c764da852",
              "runtimeId":"dbe96e91-b2bd-403d-b815-470ff50c99e7",
              "consoleUrl":"http://creando-dev32.dummy.com:8088/proxy/application_1513239715582_1126/",
              "endTime":"Mon, 15 Jan 2018 00:02:10 GMT",
              "oozieExternalId":"job_1513239715582_1126",
              "externalStatus":"SUCCEEDED",
              "oozieWorkFlowId":"0000278-171219164223360-oozie-oozi-W@App_Hybrid_Demo_Titanic_ZipFile",
              "oozieActionName":"App_Hybrid_Demo_Titanic_ZipFile",
              "startTime":"Mon, 15 Jan 2018 00:01:39 GMT",
              "oozieActionStatus":"OK",
              "toString":"Action name[App_Hybrid_Demo_Titanic_ZipFile] status[OK]",
              "trackerUri":"creando-dev32.dummy.com:8032",
              "type":"java"
            }
          ],
          "valid":true
        }
      ]
    }
  ]
}



