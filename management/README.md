# Madrasa Management V2

এই সংস্করণে Supabase Authentication + Database ব্যবহার করা হয়েছে।

## গুরুত্বপূর্ণ
`config.js`-এ শুধু Supabase Project URL এবং Publishable/Anon Key বসাতে হবে।
কখনোই `service_role` বা Secret key ওয়েবসাইটে বসাবেন না।

## Database
আপনার Supabase-এ `students`, `attendance`, `results` table তৈরি করার পর
`database-setup.sql` SQL Editor-এ চালাতে হবে।

## Auth
Supabase Authentication-এ Email provider চালু রাখুন এবং একজন admin user তৈরি করুন।
তারপর অ্যাপে সেই email/password দিয়ে লগইন করুন।

## GitHub Pages
এই ফোল্ডারের ফাইলগুলো আপনার Repository-এর `management` ফোল্ডারে আপলোড/replace করুন।
