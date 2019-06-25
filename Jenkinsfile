library 'sharedlibs@Release-2'

angularPipeline(
    mnemonic: 'cpo',
    hipChatRoom: 'Team CPO',
    build: [
        enableTypeScriptLinter: true,
        enableEndToEndTesting: false,
      	includeBuildNumberInVersion: true
    ],
    codeQualityScan :[ // this send the sonar report to us in hipchat
        notificationVerbose: true
    ],
    staticSecurityScan: [
        skip: true
    ],
    smokeTest: [
        skip: true
    ],
    appUrl: "lcpo005w.rnd.pncint.net:3000",
    deploy: [
        deployEnv: 'rnd',
        deployPlaybookVersion: '2.2.2',
        component:[
            type: 'npm',
            environments: [
                rnd:[
                    level: 'rnd',
                    hosts:[
                        'lcpo005w.rnd.pncint.net'
                    ]
                ]
            ],
            artifacts: [
                 [
                    module: 'cpo-web-ui',
                    group: '@pnc-cpo',
                    ext: 'tgz',
                    dest_path: '/www/cpom/cpo_crz_lcpo005w.rnd.pncint.net/httpd/htdocs/',
                    includes: ['dist/cpo-web-ui/*'],
                    clear_dest_path: true
                ]
            ]
        ]
    ],
    functionalTest: [
        dir: 'quality_engineering/ui',
        tasks: 'clean copyAndRenameDrivers filepermission test',
        args: '-Denvironment=CPO --info',
        customMessage: "cpo-web-ui successfully tested in <a href=\"http://lcpo005w.rnd.pncint.net:3000\">dev(http://lcpo005w.rnd.pncint.net:3000)</a> <a href=\"${RUN_CHANGES_DISPLAY_URL}\">Changesets</a>",
    	publishSource: false
    ],
    performanceTest : [
        skip: true
    ],
    interactiveSecurityScan : [
        skip: true
    ]	
)
