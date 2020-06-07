function vowelsAndConsonants(s) {
    let n = s.length;
        for (let i = 0; i < n; i++) {
            if ((s[i] == "a") || (s[i] == "e") || (s[i] == "i") || (s[i] == "o") || (s[i] == "u")) {
            console.log(s[i]); //just to verify
            }
        }

        for (var j = 0; j < n; j++) {
            if ((s[j] == "a") || (s[j] == "e") || (s[j] == "i") || (s[j] == "o") || (s[j] == "u")) {
            // do nothing
            } else {
                console.log(s[j]); //just to verjfy constant
            }
        }
}
