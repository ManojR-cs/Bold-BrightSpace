export const galleryServiceCategories = [
  'Interior Design',
  'False Ceilings',
  'Gypsum Work',
  'Furnished Homes',
  'Factory-Finished Interiors',
  'Wardrobes',
  'TV Walls',
  'Kitchens',
  'Aluminium Cladding',
  'Stainless Steel (SS) Works',
  'Painting',
  'Glass Partitions',
  'Aluminium Fabrication',
] as const

export type GalleryServiceCategory = (typeof galleryServiceCategories)[number]

type GalleryReferenceSource = {
  category: GalleryServiceCategory
  photoId: string
  sourcePage: string
  alt: string
}

const galleryReferenceSources: GalleryReferenceSource[] = [
  { category: 'Interior Design', photoId: 'photo-1583847268964-b28dc8f51f92', sourcePage: 'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-OtXADkUh3-I', alt: 'Living room with furniture and a large window' },
  { category: 'Interior Design', photoId: 'photo-1774199496664-a9690967be5a', sourcePage: 'https://unsplash.com/photos/modern-living-room-with-fireplace-and-large-windows-IE0m2PUI4Fg', alt: 'Modern living room with fireplace and large windows' },
  { category: 'Interior Design', photoId: 'photo-1631679706909-1844bbd07221', sourcePage: 'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-mirror-c0JoR_-2x3E', alt: 'Living room with furniture and a mirror' },
  { category: 'Interior Design', photoId: 'photo-1786051376076-9ff627bcdcba', sourcePage: 'https://unsplash.com/photos/elegant-living-room-with-white-furniture-and-large-windows-M_Xd4ddcyNk', alt: 'Living room with white furniture and large windows' },
  { category: 'Interior Design', photoId: 'photo-1618220179428-22790b461013', sourcePage: 'https://unsplash.com/photos/green-plant-on-white-ceramic-pot-IH7wPsjwomc', alt: 'Interior detail with a green plant in a ceramic pot' },
  { category: 'Interior Design', photoId: 'photo-1618221195710-dd6b41faaea6', sourcePage: 'https://unsplash.com/photos/white-and-brown-living-room-set-9M66C_w_ToM', alt: 'White and brown living room' },
  { category: 'Interior Design', photoId: 'photo-1784790601988-7915393bc5a1', sourcePage: 'https://unsplash.com/photos/modern-living-room-with-white-furniture-large-window-abstract-painting-AVq_O7ITzfc', alt: 'Living room with white furniture, a large window, and abstract art' },
  { category: 'Interior Design', photoId: 'photo-1616047006789-b7af5afb8c20', sourcePage: 'https://unsplash.com/photos/living-room-with-tan-leather-sectional-sofa-umAXneH4GhA', alt: 'Living room with a tan leather sectional sofa' },

  { category: 'False Ceilings', photoId: 'photo-1711107796112-e5b4fe9aa075', sourcePage: 'https://unsplash.com/photos/a-ceiling-with-wooden-beams-and-lights-hanging-from-it-XHsuUM6HMZc', alt: 'Ceiling with wooden beams and hanging lights' },
  { category: 'False Ceilings', photoId: 'photo-1582203423341-64b918240e25', sourcePage: 'https://unsplash.com/photos/white-ceiling-with-light-fixture-M8LiVogRPAE', alt: 'White ceiling with a light fixture' },
  { category: 'False Ceilings', photoId: 'photo-1746439307632-cba0f8effbed', sourcePage: 'https://unsplash.com/photos/a-modern-living-room-features-decorative-ceiling-lights-i5UA8CfAD34', alt: 'Living room with decorative ceiling lights' },
  { category: 'False Ceilings', photoId: 'photo-1660492039236-4e660d5a1a14', sourcePage: 'https://unsplash.com/photos/a-ceiling-with-lights-mbtMKIlcNHA', alt: 'Ceiling with integrated lights' },
  { category: 'False Ceilings', photoId: 'photo-1572457598110-2e060c4588ad', sourcePage: 'https://unsplash.com/photos/the-ceiling-of-a-building-has-many-lights-on-it-v0D_2K1hRQQ', alt: 'Ceiling with a repeated layout of lights' },
  { category: 'False Ceilings', photoId: 'photo-1772910207026-118d5b3f06c4', sourcePage: 'https://unsplash.com/photos/modern-interior-with-circular-ceiling-lights-and-columns-ImR6qeSOEgI', alt: 'Interior with circular ceiling lights and columns' },
  { category: 'False Ceilings', photoId: 'photo-1771599141394-bc646d21cd61', sourcePage: 'https://unsplash.com/photos/recessed-ceiling-lights-illuminating-a-dark-space-jSwP1e93OHI', alt: 'Recessed ceiling lights illuminating a dark space' },
  { category: 'False Ceilings', photoId: 'photo-1763289926112-c39df1bd8b73', sourcePage: 'https://unsplash.com/photos/modern-ceiling-with-illuminated-oval-shapes-and-linear-lights-JUPrP5u4BNo', alt: 'Ceiling with illuminated oval shapes and linear lights' },

  { category: 'Gypsum Work', photoId: 'photo-1731922422051-e2a6e90ca718', sourcePage: 'https://unsplash.com/photos/a-large-room-with-a-curved-ceiling-and-blue-drapes-g09IwV8gA6c', alt: 'Large room with a curved ceiling' },
  { category: 'Gypsum Work', photoId: 'photo-1775462249353-d7ff2eaaa30f', sourcePage: 'https://unsplash.com/photos/intricate-geometric-pattern-on-a-textured-ceiling-kzTZ6GzFdF0', alt: 'Geometric pattern on a textured ceiling' },
  { category: 'Gypsum Work', photoId: 'photo-1679121877287-0dbb1d68f44c', sourcePage: 'https://unsplash.com/photos/a-group-of-lights-that-are-on-a-ceiling-btN494E_XkQ', alt: 'Group of lights set into a ceiling' },
  { category: 'Gypsum Work', photoId: 'photo-1786978941084-8ec86101ed08', sourcePage: 'https://unsplash.com/photos/white-ceiling-with-geometric-molding-rBQN9_rg21A', alt: 'White ceiling with geometric molding and ventilation grilles' },
  { category: 'Gypsum Work', photoId: 'photo-1568989247455-145c52d1280d', sourcePage: 'https://unsplash.com/photos/white-painted-decorative-interior-roof-scenery-SbREwbDuLZw', alt: 'Decorative white interior ceiling' },
  { category: 'Gypsum Work', photoId: 'photo-1714462187247-add7ed99e5d2', sourcePage: 'https://unsplash.com/photos/a-white-room-with-four-round-mirrors-on-the-ceiling-3Owbe3H5iUs', alt: 'White room with circular ceiling details' },

  { category: 'Furnished Homes', photoId: 'photo-1616137422495-1e9e46e2aa77', sourcePage: 'https://unsplash.com/photos/gray-and-white-sofa-set-trG8989WjFA', alt: 'Gray and white sofa set in a furnished room' },
  { category: 'Furnished Homes', photoId: 'photo-1613545325278-f24b0cae1224', sourcePage: 'https://unsplash.com/photos/white-and-brown-living-room-set-ztWpwTEx728', alt: 'Furnished living room in white and brown' },
  { category: 'Furnished Homes', photoId: 'photo-1602872029708-84d970d3382b', sourcePage: 'https://unsplash.com/photos/white-and-brown-wooden-table-and-chairs-YdomJdFdbDo', alt: 'Dining furniture in a furnished home' },
  { category: 'Furnished Homes', photoId: 'photo-1558442074-3c19857bc1dc', sourcePage: 'https://unsplash.com/photos/rectangular-white-coffee-table-near-brown-leather-sofa-VWt1BBQwwtU', alt: 'Coffee table beside a brown leather sofa' },
  { category: 'Furnished Homes', photoId: 'photo-1653972233499-eaad56990299', sourcePage: 'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-chandelier-8aQnBInxp1s', alt: 'Furnished living room with a chandelier' },
  { category: 'Furnished Homes', photoId: 'photo-1560185007-5f0bb1866cab', sourcePage: 'https://unsplash.com/photos/rectangular-brown-wooden-coffee-table-and-gray-3-seat-sofa-DmOhItSo49k', alt: 'Living room with a wooden coffee table and gray sofa' },
  { category: 'Furnished Homes', photoId: 'photo-1560185127-6ed189bf02f4', sourcePage: 'https://unsplash.com/photos/living-room-interior-6japTIjUQoI', alt: 'Furnished living room interior' },
  { category: 'Furnished Homes', photoId: 'photo-1600121848594-d8644e57abab', sourcePage: 'https://unsplash.com/photos/gray-and-white-living-room-set-0sDzRgrN_pI', alt: 'Gray and white living room furniture' },

  { category: 'Factory-Finished Interiors', photoId: 'photo-1631048835473-73c7aaf86096', sourcePage: 'https://unsplash.com/photos/brown-wooden-kitchen-cabinet-and-sink-oXOCQ4V1RxY', alt: 'Wooden kitchen cabinetry and sink' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1741314671445-a9a1cc1bfa7d', sourcePage: 'https://unsplash.com/photos/a-modern-kitchen-cabinet-design-W8-lX1QT7Wk', alt: 'Modern kitchen cabinet design' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1603533880965-e1302f35290b', sourcePage: 'https://unsplash.com/photos/black-wooden-shelf-with-green-plants-c0lcmyi3zOA', alt: 'Finished shelving with green plants' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1649361811423-a55616f7ab11', sourcePage: 'https://unsplash.com/photos/a-walk-in-closet-filled-with-lots-of-clothes-9KVtDmNnFP4', alt: 'Finished walk-in closet with storage' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1693892985308-44965a6060d1', sourcePage: 'https://unsplash.com/photos/a-wooden-cabinet-with-a-metal-handle-on-it-uRBHzqrUHDY', alt: 'Wood cabinet with a finished metal handle' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1636250301575-6260b0484995', sourcePage: 'https://unsplash.com/photos/a-living-room-with-a-book-shelf-filled-with-books-w8D_nJHx_5U', alt: 'Built-in shelving in a furnished living room' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1783125126667-f6713e8f6f29', sourcePage: 'https://unsplash.com/photos/light-blue-modern-pantry-with-under-cabinet-lighting-and-wine-fridge-86ZQSmd4cgk', alt: 'Modern pantry cabinetry with under-cabinet lighting' },
  { category: 'Factory-Finished Interiors', photoId: 'photo-1774716925888-190de2471de2', sourcePage: 'https://unsplash.com/photos/modern-white-entertainment-center-with-a-large-television-gH6FkQ7Y1wc', alt: 'White finished entertainment center' },

  { category: 'Wardrobes', photoId: 'photo-1672137233327-37b0c1049e77', sourcePage: 'https://unsplash.com/photos/a-walk-in-closet-with-a-mirror-and-a-stool-SseNV6Ycb1c', alt: 'Walk-in closet with mirror and stool' },
  { category: 'Wardrobes', photoId: 'photo-1643949914877-b20f30792c1e', sourcePage: 'https://unsplash.com/photos/a-room-with-a-bench-and-some-cupboards-RHARVor_ydc', alt: 'Room with a bench and storage cupboards' },
  { category: 'Wardrobes', photoId: 'photo-1708397016786-8916880649b8', sourcePage: 'https://unsplash.com/photos/a-walk-in-closet-with-shelves-drawers-and-a-suitcase-qlAWpiUiFyc', alt: 'Walk-in closet with shelves and drawers' },
  { category: 'Wardrobes', photoId: 'photo-1631889993877-71e193bf79b8', sourcePage: 'https://unsplash.com/photos/a-bedroom-with-a-bed-and-a-closet-4Ly61P3EWVY', alt: 'Bedroom with a closet' },
  { category: 'Wardrobes', photoId: 'photo-1765766600589-ddad380d6534', sourcePage: 'https://unsplash.com/photos/modern-closet-with-hanging-shirts-and-dark-wood-floor-2ujU_FJGRFI', alt: 'Modern closet with hanging storage' },
  { category: 'Wardrobes', photoId: 'photo-1784651858840-0f077fad4e1e', sourcePage: 'https://unsplash.com/photos/a-large-wooden-wardrobe-with-multiple-doors-and-black-handles-oKm0abwopb0', alt: 'Wooden wardrobe with multiple doors' },
  { category: 'Wardrobes', photoId: 'photo-1779230912036-d3fe2e748e99', sourcePage: 'https://unsplash.com/photos/a-modern-bedroom-with-a-bed-open-closet-and-chandelier-lNguoe0mGL8', alt: 'Bedroom with an open closet' },
  { category: 'Wardrobes', photoId: 'photo-1784651859318-d9300849bf34', sourcePage: 'https://unsplash.com/photos/modern-light-wood-wardrobe-in-a-clean-bedroom-interior-LVMi1lJOp7s', alt: 'Light wood wardrobe in a bedroom' },

  { category: 'TV Walls', photoId: 'photo-1633604712918-6ab1173d0ecd', sourcePage: 'https://unsplash.com/photos/a-living-room-with-a-flat-screen-tv-mounted-on-a-wall-mJk3xEjXnBU', alt: 'Living room with wall-mounted television' },
  { category: 'TV Walls', photoId: 'photo-1567690187548-f07b1d7bf5a9', sourcePage: 'https://unsplash.com/photos/turned-off-flat-screen-tv-KzGhmrQmB6I', alt: 'Flat-screen television against a wall' },
  { category: 'TV Walls', photoId: 'photo-1586024486164-ce9b3d87e09f', sourcePage: 'https://unsplash.com/photos/black-flat-screen-tv-on-white-wall-L9-sfN04jdk', alt: 'Television mounted on a white wall' },
  { category: 'TV Walls', photoId: 'photo-1667510436110-79d3dabc2008', sourcePage: 'https://unsplash.com/photos/a-room-with-a-tv-and-a-shelf-with-books-j1nfRWfkWt0', alt: 'Television and shelving in a living room' },
  { category: 'TV Walls', photoId: 'photo-1662454420647-3d20ddcdb8f8', sourcePage: 'https://unsplash.com/photos/a-living-room-with-a-large-screen-G3Ixoze4L2o', alt: 'Living room with a large screen' },
  { category: 'TV Walls', photoId: 'photo-1594026112284-02bb6f3352fe', sourcePage: 'https://unsplash.com/photos/white-wooden-wall-mounted-shelf-with-white-wooden-frame-rwa0Yh38FeA', alt: 'Wall-mounted shelving and display unit' },
  { category: 'TV Walls', photoId: 'photo-1701422522371-d2cc964a708e', sourcePage: 'https://unsplash.com/photos/a-living-room-with-a-fireplace-and-a-flat-screen-tv-tKy1HivnC2I', alt: 'Living room with fireplace and television' },
  { category: 'TV Walls', photoId: 'photo-1701421048182-2a628d927578', sourcePage: 'https://unsplash.com/photos/a-flat-screen-tv-mounted-to-a-wall-above-a-wooden-table-T5JfbSPdIiA', alt: 'Wall-mounted television above a wooden console' },

  { category: 'Kitchens', photoId: 'photo-1600489000022-c2086d79f9d4', sourcePage: 'https://unsplash.com/photos/white-and-brown-kitchen-cabinet--aDGbdTsBZg', alt: 'White and brown kitchen cabinetry' },
  { category: 'Kitchens', photoId: 'photo-1771372125074-5c7c4332095f', sourcePage: 'https://unsplash.com/photos/modern-kitchen-with-island-and-bar-stools-qslhV6cdYGw', alt: 'Modern kitchen with island and bar stools' },
  { category: 'Kitchens', photoId: 'photo-1484154218962-a197022b5858', sourcePage: 'https://unsplash.com/photos/gray-steel-3-door-refrigerator-near-modular-kitchen-MP0bgaS_d1c', alt: 'Modular kitchen with stainless refrigerator' },
  { category: 'Kitchens', photoId: 'photo-1772567732969-c1506edf80a0', sourcePage: 'https://unsplash.com/photos/modern-kitchen-with-island-and-pendant-light-UsWSkZ8NuXw', alt: 'Modern kitchen with island and pendant light' },
  { category: 'Kitchens', photoId: 'photo-1622372738946-62e02505feb3', sourcePage: 'https://unsplash.com/photos/modern-kitchen-with-wood-cabinet-teal-stool-hYb7kbu4x7E', alt: 'Modern kitchen with wood cabinetry' },
  { category: 'Kitchens', photoId: 'photo-1755771984341-546c2a04f236', sourcePage: 'https://unsplash.com/photos/modern-u-shaped-kitchen-with-sleek-cabinetry-and-appliances-OVQqxYg3Az8', alt: 'U-shaped kitchen with cabinetry and appliances' },
  { category: 'Kitchens', photoId: 'photo-1755624222023-621f7718950b', sourcePage: 'https://unsplash.com/photos/modern-kitchen-with-green-subway-tile-backsplash-O9nCBNz0T1k', alt: 'Modern kitchen with green tile backsplash' },
  { category: 'Kitchens', photoId: 'photo-1742280879518-ada47b660ccd', sourcePage: 'https://unsplash.com/photos/a-modern-kitchen-has-sleek-cabinets-and-marble-accents-euo4u0dk2YE', alt: 'Kitchen with sleek cabinets and marble accents' },

  { category: 'Aluminium Cladding', photoId: 'photo-1598638567141-696be94b464a', sourcePage: 'https://unsplash.com/photos/white-concrete-building-during-daytime-RlFLtdjoCXI', alt: 'Modern building exterior with a light facade' },
  { category: 'Aluminium Cladding', photoId: 'photo-1614620382606-33d4b9ab36f9', sourcePage: 'https://unsplash.com/photos/white-concrete-building-during-daytime-k7DrfFvUEqU', alt: 'Contemporary building facade' },
  { category: 'Aluminium Cladding', photoId: 'photo-1711967152504-1189f53ed371', sourcePage: 'https://unsplash.com/photos/a-tall-building-with-a-sky-in-the-background-LESFh9r1c7o', alt: 'Tall building with a modern facade' },
  { category: 'Aluminium Cladding', photoId: 'photo-1593162363653-2c89066f3b8c', sourcePage: 'https://unsplash.com/photos/black-and-white-concrete-building-7D1EnEvqQFc', alt: 'Geometric black and white building facade' },
  { category: 'Aluminium Cladding', photoId: 'photo-1527578349282-ed0b55c784fe', sourcePage: 'https://unsplash.com/photos/white-high-rise-building-0x9J19qqe34', alt: 'White high-rise facade' },
  { category: 'Aluminium Cladding', photoId: 'photo-1521313255612-e5942f51abb5', sourcePage: 'https://unsplash.com/photos/white-and-black-steel-frame-6zwcmtwHr3I', alt: 'Architectural steel framing detail' },
  { category: 'Aluminium Cladding', photoId: 'photo-1770910452153-93b28d444e18', sourcePage: 'https://unsplash.com/photos/modern-building-with-metallic-facade-and-glass-windows-u-NbercF9Vs', alt: 'Building with metallic facade and glass windows' },
  { category: 'Aluminium Cladding', photoId: 'photo-1775521766351-ed4d57c49b24', sourcePage: 'https://unsplash.com/photos/modern-building-facade-with-horizontal-wooden-slats-and-circular-opening-Ldv4B3h9AQ0', alt: 'Modern facade with horizontal cladding and a circular opening' },

  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1789353527956-10c7106ba38c', sourcePage: 'https://unsplash.com/photos/kitchen-with-blue-cabinets-and-appliances-TvpXwp3uWW0', alt: 'Kitchen with stainless appliances and blue cabinets' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1629078692818-c5a0443f4ae3', sourcePage: 'https://unsplash.com/photos/stainless-steel-faucet-turned-off-IcNpBCQS3fk', alt: 'Stainless steel faucet detail' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1790156591384-dbb7c31b0062', sourcePage: 'https://unsplash.com/photos/commercial-kitchen-with-stainless-steel-appliances-TSvGSPO_Kqk', alt: 'Commercial kitchen with stainless steel appliances' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1772567732877-651f16e6e335', sourcePage: 'https://unsplash.com/photos/modern-stainless-steel-gas-range-with-marble-backsplash-3GelaEnXUTE', alt: 'Stainless steel range with marble backsplash' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1769763828411-eb09bb05d97f', sourcePage: 'https://unsplash.com/photos/modern-double-kitchen-sink-with-fruit-bowl-E9wk7TE7tVI', alt: 'Double kitchen sink and counter detail' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1773101883573-2afcb4c4ff4b', sourcePage: 'https://unsplash.com/photos/modern-kitchen-island-with-sink-and-faucet-zJ_3ZDkPTJk', alt: 'Kitchen island with sink and metal faucet' },
  { category: 'Stainless Steel (SS) Works', photoId: 'photo-1773867567732-556eb4351fd7', sourcePage: 'https://unsplash.com/photos/modern-stainless-steel-gas-range-in-a-bright-kitchen-emNLadZeab8', alt: 'Stainless steel range in a bright kitchen' },

  { category: 'Painting', photoId: 'photo-1597218868981-1b68e15f0065', sourcePage: 'https://unsplash.com/photos/wooden-bench-with-art-and-plants-60SnthS09Ao', alt: 'Mustard painted wall behind a bench and framed art' },
  { category: 'Painting', photoId: 'photo-1770677350521-d5fdcbd74367', sourcePage: 'https://unsplash.com/photos/hallway-with-blue-walls-and-framed-floral-artwork-4gopZjL1bSg', alt: 'Hallway with blue painted walls' },
  { category: 'Painting', photoId: 'photo-1504587614488-3259c5c1d9b7', sourcePage: 'https://unsplash.com/photos/white-pink-green-and-yellow-painted-wall-xnFOY9SfcgI', alt: 'Color-blocked painted wall in several colors' },
  { category: 'Painting', photoId: 'photo-1507178593478-4cc8e1711ccf', sourcePage: 'https://unsplash.com/photos/multicolored-painted-wall-3hiT25zYno0', alt: 'Multicolored painted wall' },
  { category: 'Painting', photoId: 'photo-1618064197548-1fd4769a100d', sourcePage: 'https://unsplash.com/photos/yellow-and-white-painted-wall-VVKNogtS0a4', alt: 'Yellow and white painted wall' },
  { category: 'Painting', photoId: 'photo-1685452216331-862b19c21506', sourcePage: 'https://unsplash.com/photos/a-room-with-a-red-and-blue-wall-and-a-green-floor-Eec0xVWqRYc', alt: 'Interior with colorful painted walls' },

  { category: 'Glass Partitions', photoId: 'photo-1765766600457-abfd14dd502c', sourcePage: 'https://unsplash.com/photos/modern-frosted-glass-room-divider-with-black-frame-o0aygXDzegs', alt: 'Frosted glass room divider with a black frame' },
  { category: 'Glass Partitions', photoId: 'photo-1776671183498-72570903b06c', sourcePage: 'https://unsplash.com/photos/vertical-glass-panels-with-horizontal-opaque-bands-c15fxnJwGDo', alt: 'Glass panels with horizontal opaque bands' },
  { category: 'Glass Partitions', photoId: 'photo-1781513144825-aa1e284c5950', sourcePage: 'https://unsplash.com/photos/modern-white-reception-area-with-curved-lines-and-glass-partitions-ECBg5FQkBXI', alt: 'Reception area with glass partitions' },
  { category: 'Glass Partitions', photoId: 'photo-1779785654826-e7c84d0d71ab', sourcePage: 'https://unsplash.com/photos/orange-bed-green-pillows-and-art-behind-frosted-glass-partition-ZUw-1hUQB5A', alt: 'Frosted glass partition in a bedroom interior' },
  { category: 'Glass Partitions', photoId: 'photo-1770993151375-0dee97eda931', sourcePage: 'https://unsplash.com/photos/modern-office-space-with-seating-areas-and-workstations-xrNM0KNhI6Q', alt: 'Modern office with glass-separated work areas' },
  { category: 'Glass Partitions', photoId: 'photo-1781967651630-e680c7bad016', sourcePage: 'https://unsplash.com/photos/modern-retail-interior-with-concrete-arch-and-glass-partitions-4c_He7ut3x8', alt: 'Retail interior with glass partitions' },
  { category: 'Glass Partitions', photoId: 'photo-1773777135936-165f7ec74a7f', sourcePage: 'https://unsplash.com/photos/modern-bathroom-with-glass-shower-and-artistic-frosted-door-kGg--6h1zOc', alt: 'Frosted glass panel in a modern bathroom' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1789918884649-46e7943454aa', sourcePage: 'https://unsplash.com/photos/curved-glass-railing-in-modern-building-MZzYd1OzBVM', alt: 'Curved glass railing with metal panels' },

  { category: 'Furnished Homes', photoId: 'photo-1790684818020-8804c188c53a', sourcePage: 'https://unsplash.com/photos/metal-rocking-chair-on-wooden-floor-fwVL02Lpg9g', alt: 'Metal rocking chair with a light cushion' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1641912217791-9cb17fe224de', sourcePage: 'https://unsplash.com/photos/a-close-up-of-a-metal-hand-rail-QNxz0yalLjk', alt: 'Close-up of a metal handrail' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1531077386034-d12285794b5c', sourcePage: 'https://unsplash.com/photos/low-angle-photography-of-building-g_DTWgRypfE', alt: 'Architectural building detail viewed from below' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1613244288805-020d7d11c655', sourcePage: 'https://unsplash.com/photos/black-and-white-glass-window-GzQJ11g6ohc', alt: 'Black-framed glass window detail' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1669405050182-bd2398752866', sourcePage: 'https://unsplash.com/photos/a-window-with-a-glass-door-vstIG05LloA', alt: 'Window and glass door detail' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1786253575750-75585e5b0f49', sourcePage: 'https://unsplash.com/photos/black-metal-railing-by-window-2Ke1WG3FLeA', alt: 'Black metal railing by a window' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1741678126993-e5dc642cd2da', sourcePage: 'https://unsplash.com/photos/a-balcony-with-dark-doors-and-railing-l0GAA6lsFEU', alt: 'Balcony with dark-framed doors and railing' },
  { category: 'Aluminium Fabrication', photoId: 'photo-1551489424-28aacc79dbc4', sourcePage: 'https://unsplash.com/photos/a-building-that-has-many-circular-windows-on-it-pDtBVxu2N-I', alt: 'Building facade with circular windows' },
]

export const galleryReferenceImages = galleryReferenceSources.map((image, index) => ({
  id: `reference-${String(index + 1).padStart(3, '0')}`,
  category: image.category,
  alt: image.alt,
  src: `/gallery-reference/${image.photoId}.jpg`,
  source: 'Unsplash',
  sourcePage: image.sourcePage,
  license: 'Unsplash License',
}))
