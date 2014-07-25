function demo(choice) {
    var ip1 = document.getElementById("string1").value;
    var ip2 = document.getElementById("string2").value;
    var ip3 = document.getElementById("string3").value;
    var string_obj1 = new string_manipulation(ip1);
    var string_obj2 = new string_manipulation(ip2);
    var string_obj3 = new string_manipulation(ip3);
    var res = document.getElementById("output");
    var output = new string_manipulation(res);

    if (choice == "btn-Length") {
        var len = string_obj1.strlen;

        res.value = len;
    }
    if (choice == "btn-concat") {
        var con_cat = string_obj1.concat(string_obj2);
        res.value = con_cat;

    }
    if (choice == "btn-charat") {
        var char = string_obj1.char_at(string_obj2);
        res.value = char;

    }
    if (choice == "btn-indexof") {
        var char = string_obj1.index_of(string_obj2);
        res.value = char;

    }
    if (choice == "btn-Replace") {
        var char = string_obj1.Replace(string_obj2);
        res.value = char;

    }
    if (choice == "btn-substring") {
        var char = string_obj1.mySubString(string_obj2, string_obj3);
        res.value = char;

    }
    if (choice == "btn-last_index") {
        var char = string_obj1.mySubString(string_obj2);
        res.value = char;

    }



}



var string_manipulation = function (val) {
    this.value = val;
    this.strlen = mylength.call(this);
    this.concat = function (str2) {
        var final = this.value + str2.value;
        return final;
    }
    this.char_at = function (index) {
        var ret;
        var ind = parseInt(index.value, 10);
        ret = this.value[ind];
        return ret;
    }
    this.index_of = function (str) {
        var ret;
        for (var i = 0; this.value[i] != null; i++) {
            if (this.value[i] == str.value) {
                return i;
            }
        }
    }
    this.Replace = function (str) {
        var ret = "";
        for (var i = 0; i < this.strlen; i++) {
            if (str.value == this.value[i])
                ret += '*';
            else
                ret += this.value[i];
        }
        return ret;
    }
    this.mySubString = function (i, j) {
        var ch="";
        for (var k = i.value; k < j.value; k++)
            ch += this.value[k];
          return ch;
    }
    this.getLastIndexOf = function (v) {
        var i = 0, result = "";
        while (this.val[i] != null) {
            if (this.val[i] == v[0]) {
                result = i;
            }
            i++;
        }
        return result;
    };

}


var mylength = function () {
    var i = 0;
    while (this.value[i] != null)
        i += 1;
    return i;
}




/*var x = function (val){
    this.value = val;
    this.mylength = function () {
        var i = 0, len = 0;
        var string = document.getElementById("string1").value;
        for (i = 0; string[i] != null; i++) {
            len++;
        }
        var TheTextBox = document.getElementById("output");
        TheTextBox.value = TheTextBox.value + len;
    }
  
    var concat = function(){
        var string1 = document.getElementById("string1").value;
        var string2 = document.getElementById("string2").value;
        var final;
        final = string1 + string2;
        var TheTextBox = document.getElementById("output");
        TheTextBox.value = TheTextBox.value + final;

    }
}*/