// // # Recuurssive function 1:
// function reccurse(param){
//     console.log(param)
//     const fou = param - 1
//     if(fou>0){
//         reccurse(fou)
//     }
// }
// reccurse(10)

// # Recuurssive function 2:
const routes = [
    {
        title: "home",
        uri: "http:foundry/home",
        icon: "homeIcon"
    },
    {
        title: "about",
        uri: "http:foundry/about",
        icon: "aboutIcon"
    },
    {
        title: "contact",
        icon: "contactIcon",
        childRoutes: [
            {
                title: "contact_1",
                uri: "http:foundry/contact_1"
            },
            {
                title: "contact_1",
                uri: "http:foundry/contact_2"
            }
        ]
    },
    {
        title: "service",
        uri: "http:foundry/service",
        icon: "serviceIcon"
    },
    {
        title: "demo",
        icon: "demoIcon",
        childRoutes: [
            {
                title: "demo_1",
                uri: "http:foundry/demo_1"
            },
            {
                title: "demo_2",
                childRoutes: [
                    {
                        title: "demo_2.1",
                        uri: "http:foundry/demo_2.1"
                    },
                    {
                        title: "demo_2.2",
                        uri: "http:foundry/demo_2.2"
                    }
                ]
            }
        ]
    },
    {
        title: "carzo",
        uri: "http:foundry/carzo",
        icon: "carzoIcon"
    }
]

function reccurseComponent(routesParam){
    for (tab in routesParam) {
        console.log(routesParam[tab].title)
        if (routesParam[tab].uri) {
            console.log(routesParam[tab].uri)
        }
        if (routesParam[tab].icon){
            console.log(routesParam[tab].icon)
        }
        console.log('---------')
        if (routesParam[tab].childRoutes){
            console.log('Child routes start.............................')
            reccurseComponent(routesParam[tab].childRoutes)
            console.log('Child routes ends.............................')
        }
    }
}

reccurseComponent(routes)