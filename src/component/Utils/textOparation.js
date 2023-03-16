export const getLineLength=(text)=>{
   if(text.trim() == "") {
      return 0;
   }
   return text.split(/\r\n|\r|\n/).length;
}