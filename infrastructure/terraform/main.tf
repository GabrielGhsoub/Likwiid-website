resource "github_repository" "website" {
  name         = var.repo_name
  description  = "Likwiid Digital Studio - Official Website"
  visibility   = "public"
  has_issues   = true
  has_projects = false
  has_wiki     = false

  pages {
    build_type = "workflow"
    cname      = var.custom_domain
  }
}

resource "github_branch_protection" "main" {
  repository_id = github_repository.website.node_id
  pattern       = "main"

  required_pull_request_reviews {
    required_approving_review_count = 0
  }

  enforce_admins = false
}
