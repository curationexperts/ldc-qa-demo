# Generated via
#  `rails generate hyrax:work Work`
require 'rails_helper'

describe Work do
  it 'has a programmer' do
    expect { subject.programmer = ['Moomin Mama'] }
      .to change { subject.programmer.to_a }
      .to contain_exactly 'Moomin Mama'
  end
end
