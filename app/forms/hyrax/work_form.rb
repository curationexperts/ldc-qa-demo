# Generated via
#  `rails generate hyrax:work Work`
module Hyrax
  class WorkForm < Hyrax::Forms::WorkForm

    attr_writer :authorities
    
    self.model_class = ::Work
    self.terms += [:resource_type]
   
    def authorities
      @authorities = Rails.application.config_for(:authorities)
    end

  end
end
