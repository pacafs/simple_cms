json.array!(@words) do |word|
  json.extract! word, :id, :name, :description
  json.url word_url(word, format: :json)
end
