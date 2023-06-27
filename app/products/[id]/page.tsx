import ProductDetail from "@/components/ProductDetail"

export default function Page({
    params,
    searchParams,
  }: {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

    return <div>

            <ProductDetail  />
    </div>
  }