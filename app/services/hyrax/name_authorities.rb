module Hyrax
  # Provide select options for the copyright status (edm:rights) field
  class NameAuthorities < QaSelectService
    def initialize
      super('names')
    end
  end
end
