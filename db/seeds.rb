# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Album.destroy_all
Photo.destroy_all

demo_user = User.create!(
  username: 'dahveed15',
  email: 'dahveed15@gmail.com',
  password: 'password'
)

alexina = User.create!(
  username: 'alexina',
  email: 'alexina@gmail.com',
  password: 'password'
)

rewel = User.create!(
  username: 'rewel',
  email: 'rewel@gmail.com',
  password: 'password'
)

james = User.create!(
  username: 'james',
  email: 'james@gmail.com',
  password: 'password'
)

10.times do
  name = Faker::Name.unique.name
  name_arr = name.remove('.').split(' ')
  username = name_arr[0]
  username += '_' + name_arr[1] if name_arr[1]
  email = username + '@gmail.com'

  User.create!(
    username: username,
    email: email,
    password: 'password'
  )
end

discussion_album = Album.create!(
  name: 'discussion',
  user_id: demo_user.id
)

nature_album = Album.create!(
  name: 'nature',
  user_id: demo_user.id
)

nature_photo_1 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204152/hhznr3nbl2aetw58ngcw.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_2 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204144/hqj7hvulqumkdd0iodnk.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_3 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204132/eywrq8jpafg9qctjpojj.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_4 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204118/tinxyhzutzmdcjgh8ay9.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_5 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204105/kkxheplrqcqtuq1eppcr.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_6 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204092/lhgobnwivko033vauta2.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_7 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204079/eliyypzohwbqu1r6rifw.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_8 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204031/jcimmklpvvtkl5eob55w.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_9 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204016/pwucbccnqen63a8cdpxt.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_10 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518204005/cxet6p1rz0moizgf5ysw.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_11 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518203997/px0slbfb1x1cuqtnjcf0.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_12 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518203989/wl3o4c4odtbzaqf8nsm7.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)

nature_photo_13 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518203982/dk6lofzweaylf1iofcxy.jpg',
  album_id: nature_album.id,
  user_id: demo_user.id
)


discussion_photo_1 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205811/nvwhtkltlstzdamro63q.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_2 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205728/a8engzlshwbapkizj2xu.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_3 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205707/baxdfexpwhxuvd5ivkoi.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_4 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205695/s8jap2bgczu8xhsnpq5n.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_5 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205684/qoscenuazz9ug1p7wcb2.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_6 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205673/pdrpfw9qimfoqiei9quv.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_7 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205661/kqxdkrzx1iajq8gzamg9.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_8 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205652/k2mwjusbdrwzyefhtpkp.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_9 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205643/ninippxk7pwifqjjv3vs.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_10 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205626/r5hgdyx7aze7dgv15qrx.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_11 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205596/fqv9lbhfrmo1vcda7vhu.jpg',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

discussion_photo_12 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dmovh1w8g/image/upload/v1518205587/ousyzgzf0capqibrgy7f.png',
  album_id: discussion_album.id,
  user_id: demo_user.id
)

comment1 = Comment.create!(
  user_id: demo_user.id,
  photo_id: nature_photo_1.id,
  body: 'This is so cool!',
  comment_user: demo_user.username
)

comment2 = Comment.create!(
  user_id: alexina.id,
  photo_id: nature_photo_1.id,
  body: 'wow! nice!',
  comment_user: alexina.username
)

comment3 = Comment.create!(
  user_id: rewel.id,
  photo_id: nature_photo_1.id,
  body: 'amazing',
  comment_user: rewel.username
)
comment4 = Comment.create!(
  user_id: james.id,
  photo_id: nature_photo_1.id,
  body: 'love it bro',
  comment_user: james.username
)
