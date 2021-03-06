var ContainerTemplate= "\
<input type=\"hidden\" name=\"campo-{{.prefix}}{{.index}}\" value=\"###container####\" />\
<input type=\"hidden\" name=\"campo-{{.prefix}}{{.index}}-nfields\" value=\"{{.fields.length}}\" />\
<input type=\"hidden\" name=\"title-{{.prefix}}{{.index}}\" value=\"{{label}}\" />\
<div class=\"panel panel-default\">\
    <div class=\"panel-heading\">\
      <h3 class=\"panel-title\">{{label}}\
        {{#validField}}\
          <span class=\"pull-right label label-success\">\
            <i class=\"glyphicon glyphicon-ok\"></i>\
          </span>\
        {{/validField}}\
                              \
        {{^validField}}\
          <span class=\"pull-right label label-danger\">\
            <i class=\"glyphicon glyphicon-exclamation-sign\"></i>\
          </span>\
        {{/validField}}\
        \
      </h3>\
    </div>\
    <div class=\"panel-body container-field\">\
      <div class=\"well\"> {{description}} </div>\
        {{#fields:j}}\
            {{#(type==\"simpleText\")}} {{>simpleText}} {{/ end }}\
            {{#(type==\"message\")}} {{>message}} {{/ end }}\
        <!-- Add other types of fields here: -->\
      {{/fields}}\
    </div>\
    <div style=\"overflow:hidden;\" class=\"text-muted panel-footer\"> \
      {{#(min>.cars)}} <span class=\"label label-text label-danger\"> Faltan {{min-.cars}} caracteres</span> {{/ end }} \
      {{^(min>.cars)}} \
          {{#(max>cars)}} <span class=\"label label-text label-success\"> Quedan {{max-.cars}} caracteres </span> {{/ end inner }}\
      {{/ end outer}}\
      {{#(max < .cars)}} <span class=\"label label-text  label-danger\">  Se ha pasado del máximo de caracteres, {{.cars}} </span>{{/ end }} \
      <div class=\"pull-right\" >Mínimo {{min}}, máximo {{max}} -  {{.cars?.cars:0}}</div>\
    </div>\
</div> \
";
