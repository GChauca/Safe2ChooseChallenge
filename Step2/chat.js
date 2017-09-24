<script type="text/javascript">
 
  var url = window.location.href;
  var locale = url.split("/")[3];
  var language;
  var onlineGreeting = ["Habla con nosotras", "Fale com a gente", "Parlez-nous", "हमारे साथ बात करो", "Porozmawiaj z nami", "Chat with us"];
  var offlineGreeting = ['Nuestros consejeros no están disponibles en este momento, por favor deje un mensaje y nos pondremos en contacto con usted en breve.', 'Nossos conselheiros não estão disponíveis no momento, deixe uma mensagem e entraremos em contato em breve.', 'Nos conseillers ne sont pas disponibles pour le moment, veuillez laisser un message et nous vous contacterons bientôt.', 'हमारे सलाहकार इस वक्त उपलब्ध नहीं हैं, कृपया एक संदेश छोड़ें और हम आपको जल्द ही संपर्क करेंगे।', 'Nasi doradcy nie są obecnie dostępni, zostaw wiadomość i skontaktujemy się z Państwem wkrótce.', "Our counselors are not available at the moment, please leave a message and we will contact you soon."];


if(locale === "es") {language = 0;}
else if (locale === "pt") {language = 1};
else if (locale === "hi") {language = 2};
else if (locale === "pl") {language = 3};
else {language = 4};



  $zopim(function() {
    $zopim.livechat.departments.filter('locale');
  });


 
  $zopim(function() {
    $zopim.livechat.departments.setVisitorDepartment('locale');
     window.$zopim||(function(d,s){var z=$zopim=function(c){
      z._.push(c)},$=z.s=
      d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
      _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
      $.src='//v2.zopim.com/?';z.t=+new Date;$.
      type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
      $zopim(function() {
        $zopim.livechat.setGreetings({
        'online': onlineGreeting[language.value],
        'offline': offlineGreeting[language.value]
        });
      });
   
  });


$zopim(function() {
    $zopim.livechat.offlineForm.setGreetings(offlineGreeting[language.value]);
  });
 

</script>