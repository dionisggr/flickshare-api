BEGIN;

TRUNCATE list_movies, movies, lists, users RESTART IDENTITY CASCADE;

INSERT INTO users
  (username, first_name, last_name, email, password, admin)
VALUES
  ('admin', 'Lightning', 'Mcqueen', 'demo@email.com', '$2b$08$XpZWKEoZiLDDk6UMctbQCONuYPimQMUfhpgDNv0ZK.ZD3Jvldw2J2', TRUE), -- password: password
  ('guest', 'Guesty', 'Guest', 'guesty@guest.com', '$2b$08$XpZWKEoZiLDDk6UMctbQCONuYPimQMUfhpgDNv0ZK.ZD3Jvldw2J2', FALSE); -- password: password

INSERT INTO lists
  (name, suggestion)
VALUES
  ('Top Rated', FALSE),
  ('Popular', FALSE),
  ('Latest', FALSE),
  ('In Theaters', FALSE);

INSERT INTO movies
  (name, tmdb_id, release_date, popularity, avg_vote, vote_count, poster, description)
VALUES
  ('Gabriel''s Inferno Part III', 761053, '2020-11-19', 34.985, 8.9, 703, 'https://image.tmdb.org/t/p/original/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg', 'The final part of the film adaption of the erotic romance novel Gabriel''s Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.'),
  ('Gabriel''s Inferno Part II', 724089, '2020-07-31', 6.76, 8.8, 1166, 'https://image.tmdb.org/t/p/original/pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg', 'Professor Gabriel Emerson finally learns the truth about Julia Mitchell''s identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another''s arms?'),
  ('Dilwale Dulhania Le Jayenge', 19404, '1995-10-20', 14.342, 8.8, 2643, 'https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg', 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.'),
  ('Gabriel''s Inferno', 696374, '2020-05-29', 11.163, 8.7, 1931, 'https://image.tmdb.org/t/p/original/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg', 'An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel''s Inferno is a captivating and wildly passionate tale of one man''s escape from his own personal hell as he tries to earn the impossiblforgiveness and love.'),
  ('The Shawshank Redemption', 278, '1994-09-23', 43.166, 8.7, 18322, 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates including an older prisoner named Red for his integrity and unquenchable sense of hope.'),
  ('Wolfwalkers', 441130, '2020-10-26', 24.11, 8.7, 249, 'https://image.tmdb.org/t/p/original/ehAKuE48okTuonq6TpsNQj8vFTC.jpg', 'In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.'),
  ('The Godfather', 238, '1972-03-14', 37.301, 8.7, 13836, 'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.'),
  ('Schindler''s List', 424, '1993-11-30', 27.598, 8.6, 11031, 'https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg', 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.'),
  ('Your Name.', 372058, '2016-08-26', 108.69, 8.6, 7109, 'https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg', 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki''s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.'),
  ('The Godfather: Part II', 240, '1974-12-20', 29.973, 8.6, 8262, 'https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg', 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.'),
  ('Rascal Does Not Dream of a Dreaming Girl', 572154, '2019-06-15', 135.809, 8.6, 222, 'https://image.tmdb.org/t/p/original/7Ai8vNEv4zEveh12JViGikoVPVV.jpg', 'In Fujisawa, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted by the appearance of his first crush, Shoko Makinohara.'),
  ('Dedicated to my ex', 644479, '2019-11-01', 49.642, 8.6, 336, 'https://image.tmdb.org/t/p/original/riAooJrFvVhotyaOgoI0WR7okSe.jpg', 'The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.'),
  ('Spirited Away', 129, '2001-07-20', 54.282, 8.5, 10933, 'https://image.tmdb.org/t/p/original/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg', 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.'),
  ('Parasite', 496243, '2019-05-30', 152.609, 8.5, 10708, 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', 'All unemployed, Ki-taek''s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.'),
  ('The Green Mile', 497, '1999-12-10', 40.079, 8.5, 11815, 'https://image.tmdb.org/t/p/original/velWPhVMQeQKcxggNEU8YmIo52R.jpg', 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people''s ailments. When the cell block''s head guard, Paul Edgecomb, recognizes Coffey''s miraculous gift, he tries desperately to help stave off the condemned man''s execution.'),
  ('Clouds', 630566, '2020-10-09', 34.094, 8.5, 616, 'https://image.tmdb.org/t/p/original/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg', 'Young musician Zach Sobiech discovers his cancer has spread, leaving him just a few months to live. With limited time, he follows his dream and makes an album, unaware that it will soon be a viral music phenomenon.'),
  ('KonoSuba: God''s Blessing on this Wonderful World! Legend of Crimson', 532067, '2019-08-30', 173.295, 8.5, 227, 'https://image.tmdb.org/t/p/original/j73LuQcA21KvkVFcroWWMN8tTJv.jpg', 'It is not strange that the Demon Lord''s forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord''s generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons'' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin''s birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.'),
  ('Pulp Fiction', 680, '1994-09-10', 43.495, 8.5, 20594, 'https://image.tmdb.org/t/p/original/plnlrtBUULT0rh3Xsjmpubiso3L.jpg', 'A burger-loving hit man, his philosophical partner, a drug-addled gangster''s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.'),
  ('Hamilton', 556574, '2020-07-03', 18.044, 8.5, 625, 'https://image.tmdb.org/t/p/original/h1B7tW0t399VDjAcWJh8m87469b.jpg', 'Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.'),
  ('Space Sweepers', 581389, '2021-02-05', 2930.791, 7.2, 231, 'https://image.tmdb.org/t/p/original/bmemsraCG1kIthY74NjDnnLRT2Q.jpg', 'When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that''s known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.'),
  ('Below Zero', 587996, '2021-01-29', 1569.093, 6.4, 334, 'https://image.tmdb.org/t/p/original/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg', 'When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.'),
  ('Outside the Wire', 775996, '2021-01-15', 1419.332, 6.5, 715, 'https://image.tmdb.org/t/p/original/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg', 'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.'),
  ('Ashfall', 581387, '2019-12-19', 995.651, 6.7, 193, 'https://image.tmdb.org/t/p/original/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg', 'Stagnant since 1903, at an elevation of 9000'', a volcano erupts on the mythical and majestic Baekdu Mountain.'),
  ('Breach', 651571, '2020-12-17', 1195.64, 4.6, 268, 'https://image.tmdb.org/t/p/original/13B6onhL6FzSN2KaNeQeMML05pS.jpg', 'A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.'),
  ('Black Water: Abyss', 522444, '2020-07-09', 1149.283, 5.1, 137, 'https://image.tmdb.org/t/p/original/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg', 'An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.'),
  ('Soul', 508442, '2020-12-25', 976.127, 8.3, 4869, 'https://image.tmdb.org/t/p/original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg', 'Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.'),
  ('To All the Boys: Always and Forever', 614409, '2021-02-12', 904.581, 8.1, 808, 'https://image.tmdb.org/t/p/original/zdkJs9j6yKo9di0kjtctM01fSMv.jpg', 'Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.'),
  ('Vanguard', 604822, '2020-09-30', 999.598, 6.5, 200, 'https://image.tmdb.org/t/p/original/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg', 'Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world''s deadliest mercenary organization.'),
  ('Skylines', 560144, '2020-10-25', 909.838, 5.7, 175, 'https://image.tmdb.org/t/p/original/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg', 'When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what''s left of humanity.'),
  ('Finding ''Ohana', 644092, '2021-01-29', 798.79, 6.7, 135, 'https://image.tmdb.org/t/p/original/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg', 'Two Brooklyn siblings'' summer in a rural Oahu town takes an exciting turn when a journal pointing to long-lost treasure sets them on an adventure, leading them to reconnect with their Hawaiian heritage.'),
  ('Mortal Kombat Legends: Scorpion''s Revenge', 664767, '2020-04-12', 959.431, 8.4, 750, 'https://image.tmdb.org/t/p/original/4VlXER3FImHeFuUjBShFamhIp9M.jpg', 'After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he''s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung''s horde of Outworld gladiators and reign over the Mortal Kombat tournament.'),
  ('Tenet', 577922, '2020-08-22', 720.62, 7.3, 4443, 'https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg', 'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'),
  ('100% Wolf', 520946, '2020-06-26', 689.085, 5.9, 82, 'https://image.tmdb.org/t/p/original/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg', 'Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first "warfing" goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he''s 100% Wolf.'),
  ('Honest Thief', 553604, '2020-09-03', 604.971, 6.6, 611, 'https://image.tmdb.org/t/p/original/zeD4PabP6099gpE0STWJrJrCBCs.jpg', 'A bank robber tries to turn himself in because he''s falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.'),
  ('Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)', 495764, '2020-02-05', 645.401, 7.1, 6934, 'https://image.tmdb.org/t/p/original/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg', 'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.'),
  ('The Croods: A New Age', 529203, '2020-11-25', 683.508, 7.6, 1521, 'https://image.tmdb.org/t/p/original/tK1zy5BsCt1J4OzoDicXmr0UTFH.jpg', 'Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans a family that''s a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.'),
  ('Tom & Jerry', 587807, '2021-02-11', 559.054, 6, 27, 'https://image.tmdb.org/t/p/original/e06BpqZIxRSpvNSbItcGcgs0S5I.jpg', 'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can''t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.'),
  ('Sputnik', 594718, '2020-09-08', 511.033, 6.4, 194, 'https://image.tmdb.org/t/p/original/eAUzmhP54bE1vPXaY7FbuZREJlR.jpg', 'At the height of the Cold War, a Soviet spacecraft crash lands after a mission gone awry, leaving the commander as its only survivor. After a renowned Russian psychologist is brought in to evaluate the commander''s mental state, it becomes clear that something dangerous may have come back to Earth with him...'),
  ('Host', 723072, '2020-12-04', 465.178, 7, 143, 'https://image.tmdb.org/t/p/original/h7dZpJDORYs5c56dydbrLFkEXpE.jpg', 'Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.'),
  ('Fear of Rain', 599281, '2021-02-12', 366.549, 7.7, 45, 'https://image.tmdb.org/t/p/original/5hmaACPJfI2M0v38DeltW3dSggT.jpg', 'A teenage girl living with schizophrenia begins to suspect her neighbor has kidnapped a child. Her parents try desperately to help her live a normal life, without exposing their own tragic secrets, and the only person who believes her is Caleb – a boy she isn''t even sure exists.'),
  ('Death of Me', 595149, '2020-10-02', 221.09, 5.1, 96, 'https://image.tmdb.org/t/p/original/8F9xUvb1JMWUMkFV2Yq3aiueAbq.jpg', 'A couple on holiday on a remote South Pacific island awaken one morning with a hang over and no recollection of what transpired. When playing back a video of the previous night, they see they participated in a local ritual that somehow ends with him murdering her.'),
  ('The Rental', 587496, '2020-07-23', 394.496, 5.6, 299, 'https://image.tmdb.org/t/p/original/3ynPnBXQVT2Y0s19fDIPlWKUlxH.jpg', 'Two couples on an oceanside getaway grow suspicious that the host of their seemingly perfect rental house may be spying on them. Before long, what should have been a celebratory weekend trip turns into something far more sinister.'),
  ('Roald Dahl''s The Witches', 531219, '2020-10-25', 307.84, 6.7, 1287, 'https://image.tmdb.org/t/p/original/b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg', 'In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world''s Grand High Witch has gathered.'),
  ('Demon Slayer: Mugen Train', 635302, '2020-10-16', 231.531, 8, 450, 'https://image.tmdb.org/t/p/original/yF45egpHwaYLn4jTyZAgk0Cmug9.jpg', 'Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar''s head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!'),
  ('Malcolm & Marie', 722913, '2021-01-28', 214.835, 7.3, 487, 'https://image.tmdb.org/t/p/original/bdidDnAZwchN5vTenoNuhGPJTri.jpg', 'As a filmmaker and his girlfriend return home from his movie premiere, smoldering tensions and painful revelations push them toward a romantic reckoning.'),
  ('Wrong Turn', 630586, '2021-01-26', 186.719, 6.7, 125, 'https://image.tmdb.org/t/p/original/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg', 'Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.'),
  ('Raya and the Last Dragon', 527774, '2021-03-03', 202.779, 0, 0, 'https://image.tmdb.org/t/p/original/6tdfPVC6kqCVFHqmAGibgYcgw3S.jpg', 'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it''s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.'),
  ('The Owners', 659986, '2020-08-27', 223.886, 5.7, 134, 'https://image.tmdb.org/t/p/original/gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg', 'A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.'),
  ('Harry Potter and the Goblet of Fire', 674, '2005-11-16', 131.76, 7.8, 15068, 'https://image.tmdb.org/t/p/original/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg', 'Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.'),
  ('Silk Road', 579051, '2021-02-19', 55.394, 8, 7, 'https://image.tmdb.org/t/p/original/6KxiEWyIDpz1ikmD7nv3GTX4Uoj.jpg', 'The true story of Ross Ulbricht, the charismatic young tech-mastermind who unleashed the darknet website Silk Road, and the corrupt DEA agent determined to bring down his billion-dollar empire.'),
  ('The Marksman', 634528, '2021-01-15', 63.024, 6.1, 37, 'https://image.tmdb.org/t/p/original/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg', 'Jim Hanson''s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy''s reluctant defender. He embraces his role as Miguel''s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.'),
  ('Boss Level', 513310, '2021-02-19', 45.279, 7.3, 12, 'https://image.tmdb.org/t/p/original/nR2X7oi1Ot8AVti5kuGNwGXFwHW.jpg', 'A retired special forces officer is trapped in a never-ending time loop on the day of his death.'),
  ('Promising Young Woman', 582014, '2020-12-13', 50.246, 7.6, 323, 'https://image.tmdb.org/t/p/original/cjzU4g6SlScnP4MdkleyI25KGlR.jpg', 'A young woman haunted by a tragedy in her past takes revenge on the predatory men unlucky enough to cross her path.'),
  ('Nomadland', 581734, '2020-12-26', 69.677, 7.7, 148, 'https://image.tmdb.org/t/p/original/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg', 'A woman in her sixties embarks on a journey through the Western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.'),
  ('Chaos Walking', 412656, '2021-02-24', 35.041, 10, 1, 'https://image.tmdb.org/t/p/original/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg', 'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.'),
  ('Hurricane', 506863, '2018-09-07', 37.308, 5.9, 102, 'https://image.tmdb.org/t/p/original/mTpmZORhYswd9YinB23wV9QE2cx.jpg', 'The story of the Polish fliers who found themselves fighting for the freedom of their own country in foreign skies. Seen through the eyes of a Polish fighter ace and adventurer, it tells how the Poles—driven across Europe by the German war machine—finally make their last stand. Flying Hurricanes for the RAF over Britain, they became a key component in the legend of "The Few". Up against the might of the Luftwaffe they hoped that, by saving Great Britain from Nazi invasion, they were keeping the dream of a free Poland alive.'),
  ('Supernova', 642208, '2021-01-29', 31.242, 6.1, 10, 'https://image.tmdb.org/t/p/original/l5n8Qb5Vm01s8UdqI6Brf0J4j6W.jpg', 'Sam and Tusker, partners of 20 years, are traveling across England in their old RV visiting friends, family and places from their past. Since Tusker was diagnosed with early-onset dementia two years ago, their time together is the most important thing they have.  As the trip progresses, however, their ideas for the future clash, secrets come out, and their love for each other is tested as never before. Ultimately, they must confront the question of what it means to love one another in the face of Tusker''s illness.'),
  ('Minari', 615643, '2021-02-12', 24.94, 7.3, 14, 'https://image.tmdb.org/t/p/original/9Bb6K6HINl3vEKCu8WXEZyHvvpq.jpg', 'A Korean-American family moves to Arkansas in search of their own American Dream. With the arrival of their sly, foul-mouthed, but incredibly loving grandmother, the stability of their relationships is challenged even more in this new life in the rugged Ozarks, testing the undeniable resilience of family and what really makes a home.'),
  ('Army of One', 768939, '2021-02-18', 25.463, 0, 0, 'https://image.tmdb.org/t/p/original/xxv6yHSNTGaf7aqwF1XdLVNpvpB.jpg', 'Out hiking, Special Forces Brenner Baker stumbles onto a Cartel''s compound. Her husband''s killed and she''s left for dead. The Cartel made two mistakes, killed her husband and left her alive. They won''t live to make another.'),
  ('Run Hide Fight', 629017, '2021-03-04', 25.896, 0, 0, 'https://image.tmdb.org/t/p/original/wlP25H14OvKoFORIwuKomZzioA5.jpg', 'A 17-year-old girl uses her wits, survival skills, and compassion to fight for her life, and those of her fellow classmates, against a group of live-streaming school shooters.'),
  ('Sound of Metal', 502033, '2020-11-20', 26.731, 7.8, 460, 'https://image.tmdb.org/t/p/original/y89kFMNYXNKMdlZjR2yg7nQtcQH.jpg', 'Metal drummer Ruben begins to lose his hearing. When a doctor tells him his condition will worsen, he thinks his career and life is over. His girlfriend Lou checks the former addict into a rehab for the deaf hoping it will prevent a relapse and help him adapt to his new life. After being welcomed and accepted just as he is, Ruben must choose between his new normal and the life he once knew.'),
  ('The Father', 600354, '2020-12-23', 21.563, 7.9, 16, 'https://image.tmdb.org/t/p/original/okhrkHYF94K4kLXLwZkQMhWZ0fL.jpg', 'A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.'),
  ('Rock Bottom Riser', 794691, '2021-03-01', 20.944, 0, 0, 'https://image.tmdb.org/t/p/original/kVVY3EYRxb2439Ya8r7Qj6Kh4IJ.jpg', 'From the earliest voyagers who navigated by starlight to the discovery of habitable planets by astronomers, Rock Bottom Riser examines the all-encompassing encounters of an island world at sea. As lava continues to flow from the earth''s core on the island of Hawaii—posing an imminent danger—a crisis mounts. Astronomers plan to build the world''s largest telescope on Hawaii''s most sacred and revered mountain, Mauna Kea. Based on ancient Polynesian navigation, the arrival of Christian missionaries, and the observatory''s ability to capture the origins of the universe, Rock Bottom Riser surveys the influence of settler colonialism, the search for intelligent life, and the discovery of new worlds as we peer into our own planet''s existence.'),
  ('Dream Factory', 570292, '2019-07-04', 20.827, 7, 41, 'https://image.tmdb.org/t/p/original/5eF8oy8LPcqIHSbpuf8UARtSc7O.jpg', 'A romantic drama set in 1961 that follows a young studio extra''s ambitious efforts to reunite with the French girl he loves after being separated by the construction of the Berlin Wall.');

INSERT INTO list_movies
  (list_id, movie_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (1, 9),
  (1, 10),
  (1, 11),
  (1, 12),
  (1, 13),
  (1, 14),
  (1, 15),
  (1, 16),
  (1, 17),
  (1, 18),
  (1, 19),
  (1, 20),
  (2, 21),
  (2, 22),
  (2, 23),
  (2, 24),
  (2, 25),
  (2, 26),
  (2, 27),
  (2, 28),
  (2, 29),
  (2, 30),
  (2, 31),
  (2, 32),
  (2, 33),
  (2, 34),
  (2, 35),
  (2, 36),
  (2, 37),
  (2, 38),
  (2, 39),
  (2, 40),
  (3, 41),
  (3, 42),
  (3, 43),
  (3, 44),
  (3, 45),
  (3, 46),
  (3, 47),
  (3, 48),
  (3, 49),
  (3, 50),
  (3, 51),
  (3, 52),
  (3, 53),
  (3, 54),
  (3, 55),
  (3, 56),
  (4, 57),
  (4, 58),
  (4, 59),
  (4, 60),
  (4, 61),
  (4, 62),
  (4, 63),
  (4, 64);


COMMIT;