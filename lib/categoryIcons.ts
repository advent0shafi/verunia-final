// lib/categoryIcons.ts
import {
  Armchair,
  Table,
  Sofa,
  Package,
  Box,
  Sparkles,
} from "lucide-react"

export const categoryIconMap: Record<string, any> = {
  "office-chair": Armchair,
  desks: Table,
  sofas: Sofa,
  storage: Package,
  "silent-boxes": Box,
  accessories: Sparkles,
}