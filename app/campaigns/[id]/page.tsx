import { AdminLayout } from "@/components/admin-layout"
import CampaignDetailsContent from "@/components/campaign-details-content"

export default function CampaignDetailsPage({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <CampaignDetailsContent id={params.id} />
    </AdminLayout>
  )
}

