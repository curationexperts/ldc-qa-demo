# Controlled Vocabulary Demo

This is a demonstration of linked controlled vocabularies in Hyrax. This
application uses a
[Linked Data Fragments](https://github.com/ActiveTriples/linked-data-fragments)
based caching approach to support query of both web-based and local controlled
vocabularies.


# Adding Controlled Vocabulary Dropdown Options

To create your own dropdown with authorities you extend the `QASelectService` class. In this project it's done at: `/chf/app/services/hyrax/name_authorities.rb`

```ruby
module Hyrax
  # Provide select options for the copyright status (edm:rights) field
  class NameAuthorities < QaSelectService
    def initialize
      super('names')
    end
  end
end
```

You initialize the service with the name of a YAML file `names.yml` that contains a list of authorities:

```yaml
terms:
    - id: /authorities/search/loc/names
      term: LOC Names
      active: true
    - id: /authorities/search/assign_fast/all
      term: FAST
      active: true
```

Then in the partials for the input field at `/app/views/records/edit_fields/_creator.html.erb`:

```erb
<% name_authorities = Hyrax::NameAuthorities.new %>

<%=
  f.input key,
  as: :multi_value,
  input_html: {
  class: 'form-control',
  data: { 'autocomplete-url' => "/authorities/search/loc/names",
'autocomplete' => key }
} ,
required: f.object.required?(key) %>

<%= f.input key, collection: name_authorities.select_active_options, label: false %>
```
