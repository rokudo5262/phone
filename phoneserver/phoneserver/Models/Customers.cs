using System;
using System.Collections.Generic;

namespace phoneserver.Models
{
    public partial class Customers
    {
        public Customers()
        {
            Orders = new HashSet<Orders>();
        }

        public int CustomerId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Street { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string IdentityCard { get; set; }
        public string IdentityCardPlace { get; set; }
        public DateTime? IdentityCardDate { get; set; }
        public string IdentityCardAddress { get; set; }
        public bool? Deleted { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }

    public virtual ICollection<Orders> Orders { get; set; }
    }
}
