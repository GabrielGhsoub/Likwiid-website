output "repository_url" {
  value = github_repository.website.html_url
}

output "pages_url" {
  value = "https://${var.custom_domain}"
}

output "dns_instructions" {
  value = <<-EOT
    Configure these DNS records at your domain registrar (GoDaddy):

    Type: A
    Name: @
    Value: 185.199.108.153

    Type: A
    Name: @
    Value: 185.199.109.153

    Type: A
    Name: @
    Value: 185.199.110.153

    Type: A
    Name: @
    Value: 185.199.111.153

    Type: CNAME
    Name: www
    Value: ${var.github_owner}.github.io
  EOT
}
