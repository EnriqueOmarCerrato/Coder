import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'returnTds'
})
export class ReturnTdsPipe implements PipeTransform {
  constructor(private _sanitizer:DomSanitizer){}
  transform(data:any,i:string,campos):SafeHtml {
    let tds="<td>"+(i+1)+"</td>"; //data[campos[i]["index"]]
    for (let i = 0; i < campos.length; i++) {
      if(campos[i]['isTemplate']){
        let template=campos[i]['template'];
        for (let k = 0; k < campos[i]['campoMultiple'].length; k++) {
          template=template.replace("<"+campos[i]['campoMultiple'][k]["index"]+">", data[campos[i]['campoMultiple'][k]["index"]]);
        }
        tds+='<td style="text-align: center;">'+template+'</td>';
      }else{
        if(campos[i]['type']=="string"){
          tds+='<td style="text-align: center;">'+data[campos[i]["index"]]+'</td>';
        }else if(campos[i]['type']=="blob"){
          if(data[campos[i]["index"]].length>0){
            tds+='<td><img style="width: 66px;height: 75px;" src="data:image/jpg;base64,'+data[campos[i]["index"]]+'"/></td>';
          }else{ 
            tds+='<td><img style="width: 66px;height: 75px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAPFBMVEXMzMzl5eXg4ODv7+/R0dHU1NTb29vt7e3Z2dno6Ojx8fHi4uLs7Ozq6urj4+PPz8/e3t7W1tby8vL09PQMHpbdAAADDUlEQVR42u3dWZLsKAwFUDEYD/UAw93/XvuTj46OLrsgJdXT2cGNRAxOEZAxxhhjjDHGGGOMMcYYYwy/2u6ScweAnnO5W9UY4ig7/mUvR1WVImX8p5y0ZEkn/seZSLzqA74h+EqSRYdvc5Gkqg6PuEoi+Y6Huid5WsALoZEsteClUkmQbcdr+0ZiJPxIIiEKfqiQCA4/5pTnGJzyHIOTkUN/koRpEjHaOqbpG/HZMdFObG5MdROT2jFVr8TDYzJPPDom68xTr/YpOGO6TAwiFoi6597h5htZ+scWlqCPa1iica2G+tfEE0ucnBtf3VtgLMK0HOpfEhsWaRbkHY9FvAWxIBbEglgQC2JBLIgFsd2vBbEgXEHs44MFsSAWxIL8FUEylsj0WWnHInti79JS2LlVsFRR/pfCEHWfDgeve8IaMldXkNYuISxnQaQFsWJ/5sRiJ0enluaurQ2LbfQhAUsF+hTPsEPRuGuMdh55rF5Y5qosXdjqu7Gd8oE1fGGJL/q4I2C6cEi9vq7kgvsXw7BSUPKO+NSAaUIlRg3TNLviKmqzclVi5hm27oJPWYH4NeWVPmSG7z9Sz4uRRPDKK30Iuit9aMorffDKB9bwB6/9IUnihZeuSKJsvN95+T8QJRIn8eXgX00CSVTYmjX4630jkS48dJFMjumczj9vJZIp8hxD+IvkIqkyywGXfzfvSaoDjxwkVcMjjaSqeKSSWHiELIisnXwgoeK945H9jiTO5ne8sPtNVIoS8Foom7AUqrMcrmOK7g79KUYW1hSqs2ylY5FeNh3VzV/7Y9WbgHutTCem4Xs2ZnMdH9XdRtPVeweD/a4MP4b4nyVlsMqJJqi+g133ddIzSPxcpPfaCUHO9jZGhjC5ccXgjxIzhMqRrcear1/77hCt3/QdbYd4e2MYVTzjqwUoEdqkF9v4lfrgxTZG71+Jax3K9Paxq8QM15MdVHJrcvAncVDLzc/BnyRBtTQ6xpTbxtU1xcaFuQL1yuiyUi6OGUs3N34Q5SJ5/AqeAn6FQPglLIg0/wCowqSZm6rQPwAAAABJRU5ErkJggg=="/></td>';
          }
        }
      }
    }
    return this._sanitizer.bypassSecurityTrustHtml(tds);
  }

}
