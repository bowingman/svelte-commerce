import { config } from 'dotenv'
import shell from 'shelljs'

config()

const provider = process.env.PUBLIC_API_PROVIDER || 'Litekart'

shell.cd('./src/lib/services')
shell.ln('-s', `${provider}/`, `Active/`)
// shell.rm('-Rf', 'Active')
// shell.mkdir('-p', '-f', 'Active')
// shell.cp('-R', `${provider}/AddressService.ts`, 'Active/AddressService.ts')
// shell.cp('-R', `${provider}/AutocompleteService.ts`, 'Active/AutocompleteService.ts')
// shell.cp('-R', `${provider}/BannersService.ts`, 'Active/BannersService.ts')
// shell.cp('-R', `${provider}/BlogService.ts`, 'Active/BlogService.ts')
// shell.cp('-R', `${provider}/CartService.ts`, 'Active/CartService.ts')
// shell.cp('-R', `${provider}/CategoryService.ts`, 'Active/CategoryService.ts')
// shell.cp('-R', `${provider}/CollectionService.ts`, 'Active/CollectionService.ts')
// shell.cp('-R', `${provider}/ContactService.ts`, 'Active/ContactService.ts')
// shell.cp('-R', `${provider}/CountryService.ts`, 'Active/CountryService.ts')
// shell.cp('-R', `${provider}/CouponService.ts`, 'Active/CouponService.ts')
// shell.cp('-R', `${provider}/DealsService.ts`, 'Active/DealsService.ts')
// shell.cp('-R', `${provider}/DemoRequestService.ts`, 'Active/DemoRequestService.ts')
// shell.cp('-R', `${provider}/FaqService.ts`, 'Active/FaqService.ts')
// shell.cp('-R', `${provider}/HomeService.ts`, 'Active/HomeService.ts')
// shell.cp('-R', `${provider}/OrdersService.ts`, 'Active/OrdersService.ts')
// shell.cp('-R', `${provider}/PaymentMethodService.ts`, 'Active/PaymentMethodService.ts')
// shell.cp('-R', `${provider}/PopularSearchService.ts`, 'Active/PopularSearchService.ts')
// shell.cp('-R', `${provider}/ProductService.ts`, 'Active/ProductService.ts')
// shell.cp('-R', `${provider}/ReviewService.ts`, 'Active/ReviewService.ts')
// shell.cp('-R', `${provider}/StoreService.ts`, 'Active/StoreService.ts')
// shell.cp('-R', `${provider}/UserService.ts`, 'Active/UserService.ts')
// shell.cp('-R', `${provider}/VerndorService.ts`, 'Active/VerndorService.ts')
// shell.cp('-R', `${provider}/WishlistService.ts`, 'Active/WishlistService.ts')
// shell.cp('-R', `${provider}/ZipService.ts`, 'Active/ZipService.ts')
