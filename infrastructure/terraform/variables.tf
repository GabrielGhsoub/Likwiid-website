variable "github_token" {
  description = "GitHub Personal Access Token"
  type        = string
  sensitive   = true
}

variable "github_owner" {
  description = "GitHub username"
  type        = string
  default     = "GabrielGhsoub"
}

variable "repo_name" {
  description = "Repository name"
  type        = string
  default     = "likwiid-website"
}

variable "custom_domain" {
  description = "Custom domain for GitHub Pages"
  type        = string
  default     = "likwiid.com"
}
