// import all spec modules here
import demoSpecModule = module('spec/demo.spec');

// We need to import the module to a local variable 
// to force the typescript compiler to generate the code
// that will load the js file before we call jasmineEnv.execute()
import s1 = demoSpecModule;

export module uvis.spec {    
    export function init(jasmineEnv) {        
        jasmineEnv.execute(); 
    }
}