# Generated via
#  `rails generate hyrax:work Work`
require 'rails_helper'

describe Work do
  it 'has a programmer' do
    expect { subject.programmer = ['Moomin Mama'] }
      .to change { subject.programmer.to_a }
      .to contain_exactly 'Moomin Mama'
  end
  
  context 'with an RDFSource value' do
    let(:uri)   { RDF::URI('http://example.com/Moomin_Mama') }
    let(:value) { value_class.new(uri) }

    let(:value_class) do
      Class.new do
        include ActiveTriples::RDFSource

        property :label, predicate: RDF::RDFS.label
      end
    end
      
    it 'stores the value' do
      expect { subject.programmer = value }
        .to change { subject.programmer.first }
        .to uri
    end

    it 'saves and reloads' do
      subject.title      = ['Moomin Valley Software']
      subject.programmer = value

      subject.save
      subject.reload

      expect(subject.programmer.first).to eq uri
    end
  end
end
