module.exports = {
    name: "ZipMe",

    description: "Writes a content to the file, replacing its content if exists. If the file does not exist, this will create it.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "file_path",
            "name": "File Path",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The path of the file (e.g. \"E:\\myFolder\\config.txt\").",
            "types": ["text", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "md5?",
            "name": "Zip With MD5 Hash",
            "description": "Description: This will store the files md5 hash with the file. This makes it really hard for people to alter the file, as any alterations to the file will result in a different md5 hash. You can use an online md5 hash calculator to find a files md5 hash. in order for this to be effective, you must keep the file's hash somewhere, as nothing is stopping a person from just putting in a different HASH.md5 in their zip.",
            "type": "SELECT",
            "options": {
                "tru": "True",
                "fals": "False"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
    ],

    code(cache) {
        const file_path = this.GetInputValue("file_path", cache) + "";
        let content = this.GetInputValue("content", cache, false, "") + "\n";
        const conversion_type = this.GetOptionValue("conversion_type", cache) + "";
        const type = this.GetOptionValue("write_type", cache);
        const md5state = this.GetOptionValue("md5?", cache);

        const fs = require("fs");
        const md5 = require('md5');
        var AdmZip = require("adm-zip");
        const file = new AdmZip();

        let fileexp = /(([a-zA-Z0-9]*)|(\.\/)|(.))\/.+\//g;
        let new_file_path = file_path.match(/(([a-zA-Z0-9]*)|(\.\/)|(.))\/.+\//g);
        let new_file_name = file_path.match(/([a-zA-Z0-9]+(?=\.[a-zA-Z0-9])+)/g);

        file.addLocalFile(file_path);
        console.log();
        if(md5state == "tru")
        {
        	fs.readFile(file_path, function(err, buf) {
        		fs.writeFile(md5(buf) + ".MD5", " ", function(err) { if(err){ console.error(err) } });
				file.addLocalFile(md5(buf) + ".MD5");
				file.writeZip(new_file_path + new_file_name + ".zip");
        	})
        }

        this.RunNextBlock("action", cache);
    }
}