require.config({
    baseUrl: "/",
    paths: {
        'crossroads': "scripts/crossroads/crossroads",
        'jquery': "scripts/jquery/jquery-3.0.0",
        'knockout': "scripts/knockout/knockout-3.4.0",
        'knockout-projections': "scripts/knockout/knockout-projections",
        'knockout-mapping': "scripts/knockout/knockout.mapping-latest",
        'signals': "scripts/crossroads/signals",
        'hasher': "scripts/crossroads/hasher",
        'text': "scripts/require/text",
    },
    shim: {
        'knockout-mapping': {
            deps: ['knockout'],
            exports: 'knockout-mapping'
        }
    }
})




