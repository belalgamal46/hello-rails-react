class CreateGreetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :greeting_message

      t.timestamps
    end
  end
end
