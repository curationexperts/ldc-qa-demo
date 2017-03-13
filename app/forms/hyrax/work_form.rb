# Generated via
#  `rails generate hyrax:work Work`
module Hyrax
  class WorkForm < Hyrax::Forms::WorkForm

    attr_writer :creator_authorities
    attr_writer :contributor_authorities
    
    self.model_class = ::Work
    self.terms += [:resource_type]

    def authorities
      @authorities = Rails.application.config_for(:authorities)
    end

    def creator_authoritiesy
      self.authorities
    end

    def contributor_authorities
      self.authorities
    end

  end
end
