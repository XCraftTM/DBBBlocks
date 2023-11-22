module.exports = {
    name: "NanoID",

    description: "Generates a 100% random string of characters based on the options given.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        }
    ],

    options: [
        {
            "id": "atype",
            "name": "Alphabet",
            "description": "Description: This choses which characters to use in the NanoID.",
            "type": "SELECT",
            "options": {
                "number": "[0-9]",
                    //With this alphabet, It would take ~27 minutes in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
                    //With this alphabet, It would take ~2 days in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
                    //With this alphabet, It would take ~16 years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour

                "simple": "[a-z] & [0-9]",
                    //With this alphabet, It would take ~2 days in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
                    //With this alphabet, It would take ~6 years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
                    //With this alphabet, It would take ~2 million years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
                
                "basic": "[a-z] & [A-Z] & [0-9] & - & _",
                    //With this alphabet, It would take ~12 days in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
                    //With this alphabet, It would take ~139 years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
                    //With this alphabet, It would take ~291 million years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
                
                "extended": "[a-z] & [A-Z] & [0-9] &\n - & _ & Russian, Greek, Bengali Characters "
                    //With this alphabet, It would take ~4 years in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour                
                    //With this alphabet, It would take ~273 thousand years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour
                    //With this alphabet, It would take ~71 trillion years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
            }
        },
        {
            "id": "len",
            "name": "Length",
            "description": "Description: This is how long you want the NanoID to be.",
            "type": "NUMBER"
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "ID",
            "name": "NanoID",
            "description": "Type: Text\n\nDescription: This outputs a completely random NanoID with the selected length and alphabet.",
            "types": ["text"]
        }
    ],

    async code(cache) {
        const { customAlphabet } = await this.require('nanoid');
        const length = parseInt(this.GetOptionValue('len', cache), 10);
        const atype = this.GetOptionValue('atype', cache);
        let alphabet;
        if(atype == 'extended')
        {
            alphabet = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzΆ·ΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώЁІАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯбвгдежзийклмнопрстуфхцщъыьэюяёіѢѣѲѳѴѵঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহঽৎড়ঢ়য়ৠৡ';
            // With this alphabet, It would take ~4 years in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
            // With this alphabet, It would take ~273 thousand years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour
            // With this alphabet, It would take ~71 trillion years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
        }
        else if(atype == 'basic')
        {
            alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';
            // With this alphabet, It would take ~12 days in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
            // With this alphabet, It would take ~139 years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
            // With this alphabet, It would take ~291 million years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
        }
        else if(atype == 'simple')
        {
            alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
            // With this alphabet, It would take ~2 days in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
            // With this alphabet, It would take ~6 years in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
            // With this alphabet, It would take ~2 million years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
        }
        else if(atype == 'number')
        {
            alphabet = '0123456789';
            // With this alphabet, It would take ~27 minutes in order to have a 1% probability of having a duplicate ID generated, assuming 7 character strings are generated at a rate of 1,000/hour
            // With this alphabet, It would take ~2 days in order to have a 1% probability of having a duplicate ID generated, assuming 11 character strings are generated at a rate of 1,000/hour        
            // With this alphabet, It would take ~16 years in order to have a 1% probability of having a duplicate ID generated, assuming 18 character strings are generated at a rate of 1,000/hour
        }
        console.log('a');
        console.log('a');
        console.log('a');
        console.log(alphabet);
        console.log(length);
        console.log('a');
        console.log('a');
        console.log('a');
        const nanoid = customAlphabet(alphabet, 10);
        let id;
        id = nanoid();
        console.log(">>" + id + "<<");

        this.StoreOutputValue("" + id + "", "ID", cache);
        this.RunNextBlock("action", cache);
    }
}