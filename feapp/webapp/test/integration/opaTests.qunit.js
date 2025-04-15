sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'feapp/feapp/test/integration/FirstJourney',
		'feapp/feapp/test/integration/pages/CategoriesList',
		'feapp/feapp/test/integration/pages/CategoriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('feapp/feapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);